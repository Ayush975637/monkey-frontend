"use client";
import React, { useEffect, useRef, useState, Suspense } from "react";

import { useSocket } from "@/context/SocketContext";
import { useUser } from "@clerk/nextjs"; // 👈 import Clerk hook
import { useRouter } from "next/navigation";
import SimplePeer from "simple-peer";

import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { Send, Smile } from "lucide-react";
import { Input } from "@/components/ui/input";


import EmojiPicker from 'emoji-picker-react';
import { toast } from "sonner";

import { reportUser } from "@/actions/report";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {getfriendData} from "@/actions/getprofile";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog";
const reportReasons = [
  { id: 1, reason: "🔞 Sexual content or nudity" },
  { id: 2, reason: "🔪 Violence or graphic content" },
  { id: 3, reason: "🤬 Hate speech or abusive behavior" },
  { id: 4, reason: "🙅‍♂️ Harassment or bullying" },
  { id: 5, reason: "💣 Terrorism or violent extremism" },
  { id: 6, reason: "📢 Spam or misleading content" },
  { id: 7, reason: "💊 Illegal activities (e.g., drugs, weapons)" },
  { id: 8, reason: "💔 Self-harm or suicide content" },
  { id: 9, reason: "🐾 Animal abuse" },
  { id: 10, reason: "❓ Other" }
];







function VideoWithFriendContent() {
  const searchParams = useSearchParams()
  const roomId = searchParams.get('roomId')
  const { isLoaded, isSignedIn, user } = useUser();
  const { socket, socketId } = useSocket();
  const router = useRouter();
  const myVideo = useRef<HTMLVideoElement>(null);
  const friendVideo = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const peerRef = useRef<SimplePeer.Instance | null>(null);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [callDuration, setCallDuration] = useState(0);
  const callTimerRef = useRef<NodeJS.Timeout | null>(null);

  const [messages, setMessages] = useState<{ senderId: string; content: string }[]>([]);
  const [callStarted, setCallStarted] = useState(false);

  const [friendId, setFriendId] = useState<string | null>(null);
  const [report, setReport] = useState(false);

  const [friendClerkId, setFriendClerkId] = useState<string | null>(null);

  const [input, setInput] = useState("");

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const[friendData,setFriendData]=useState<{
    imageUrl?: string;
    name?: string;
    city?: string;
    country?: string;
    dob?: Date;
  } | null>(null);
  const today=new Date();
  const sendMessage = () => {
    if (!input.trim()) return;

    if (!socketId || !socket) {
      console.error("🛑 Cannot send: No socket");
      return;
    }

    if (!friendId) {
      console.warn("⚠️ Friend ID not set yet, delaying message...");
      return;
    }

    console.log("📨 Sending message:", { socketId, friendId, content: input });

    socket.emit("sendMessagewithvideo", {
      receiverId: friendId,
      senderId: socketId,
      content: input,
    });

    setInput("");
  };


  useEffect(() => {
    const setupStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        console.log("🎥 Got local stream");
        streamRef.current = stream;
        if (myVideo.current) myVideo.current.srcObject = stream;
      } catch (err) {
        console.error("❌ Failed to access media devices", err);
      }
    };
  
    setupStream();
  
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, []);






















  useEffect(() => {
    if (!isLoaded || !isSignedIn || !socket || !roomId||!streamRef.current) return;

    socket.on("endcall2", ({ roomId }: { roomId: string }) => {
      console.log("🔴 End call received:", roomId);
      toast.error("Call ended by the other user");
      router.push("/chat");
    });
    socket.on("getClerkId", (clerkId: string) => {
      console.log("👤 Friend's Clerk ID:", clerkId);
      setFriendClerkId(clerkId); // <- your state
    });
    socket.on("matchwithfriend", ({ peerId }: { peerId: string }) => {
      console.log("🎯 Matched with:", peerId);
      console.log("✅ Friend ID set:", peerId);
      socket.emit("findClerkId", peerId);
      setFriendId(peerId);


      const peer = new SimplePeer({
        initiator: true,
        trickle: false,
        stream: streamRef.current || undefined,
      });

      peer.on("signal", (signalData) => {
        console.log("📡 Sending signal to", peerId);
        socket.emit("signal2", { peerId, signalData });
      });

      peer.on("stream", (remoteStream) => {
        
        console.log("✅ Received remote stream", remoteStream);

        const tracks = remoteStream.getTracks();
        console.log("🔍 Remote tracks:", tracks.map(t => `${t.kind}: ${t.readyState}`));
        if (friendVideo.current) friendVideo.current.srcObject = remoteStream;
        setCallStarted(true);
      });

      peerRef.current = peer;
   
      callTimerRef.current = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    });
    socket.on("signal2", ({ peerId, signalData }: { peerId: string; signalData: unknown }) => {
      console.log("📨 Received signal from", peerId);
      console.log("✅ Friend ID set:", peerId);

      setFriendId(peerId);
      socket.emit("findClerkId", peerId);
      if (!peerRef.current) {
        const peer = new SimplePeer({
          initiator: false,
          trickle: false,
          stream: streamRef.current || undefined,
        });

        peer.on("signal", (answerSignal) => {
          socket.emit("signal2", { peerId, signalData: answerSignal });
        });

        peer.on("stream", (remoteStream) => {
          console.log("✅ Received remote stream", remoteStream);

          const tracks = remoteStream.getTracks();
          console.log("🔍 Remote tracks:", tracks.map(t => `${t.kind}: ${t.readyState}`));
          if (friendVideo.current) friendVideo.current.srcObject = remoteStream;
          setCallStarted(true);
        });

        peer.signal(signalData as SimplePeer.SignalData);
        peerRef.current = peer;
        
        callTimerRef.current = setInterval(() => {
          setCallDuration(prev => prev + 1);
        }, 1000);
      } else {
        peerRef.current.signal(signalData as SimplePeer.SignalData);
      }
    });

    const handleReceive = (msg: { senderId: string; content: string }) => {
      console.log("📨 Chat message received:", msg);
      setMessages((prev) => [...prev, msg]);
    };
    const cleanup = () => {

      if (peerRef.current) peerRef.current.destroy();
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
      socket.off("recievemessagewithvideo", handleReceive);
      socket.off("matchwithfriend");
      socket.off("signal");

      if (callTimerRef.current) clearInterval(callTimerRef.current);
      setCallDuration(0);
    };


    socket.on("recievemessagewithvideo", handleReceive);



    socket.emit("join-room2", {
        roomId,      // from URL: searchParams.get('roomId')
        userId: user.id
      });

    
   
    return cleanup;

  }, [isLoaded, isSignedIn, socket, roomId, router, user?.id]);

  const toggleMic = () => {
    const audioTrack = streamRef.current?.getAudioTracks()[0];
    if (audioTrack) {
      audioTrack.enabled = !audioTrack.enabled;
      setMicOn(audioTrack.enabled);
    }
  };

  const toggleCam = () => {
    const videoTrack = streamRef.current?.getVideoTracks()[0];
    if (videoTrack) {
      videoTrack.enabled = !videoTrack.enabled;
      setCamOn(videoTrack.enabled);
    }
  };


  const endCall = (shouldStopStream = true) => {
    if (callTimerRef.current) clearInterval(callTimerRef.current);
    setCallStarted(false);
    setFriendId(null);
    socket.emit("endcall", { roomId });
    if (peerRef.current) {


      peerRef.current.destroy();
      peerRef.current = null;
    }
    if (shouldStopStream && streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setMessages([]);
  }
  const handleReportReason = async (reason: string) => {
    setReport(false);

    try {
      if (!user?.id || !friendClerkId || !reason) return;


      const res = await reportUser(user.id, friendClerkId, reason);

      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success("Reported successfully");
        endCall(true);
      }
    } catch {
      toast.error("Failed to report user. Please try again.");
    }



  };




  useEffect(() => {

    const fetchFriendData = async () => {
      const res = await getfriendData(friendClerkId);
      setFriendData(res);
    }
    
    
        fetchFriendData();
      }, [friendClerkId]);


  if (!roomId) return;



  if (!isLoaded) return <div>Loading...</div>;

  // 🚫 Redirect to login if not signed in
  if (!isSignedIn) {
    router.push("/sign-in?redirect_url=/videochat");
    return null;
  }



  // return (
  //   <div style={{ textAlign: "center" }} className="bg-yellow-300 h-screen">

  //     <Dialog open={report} onOpenChange={setReport}>

  //       <DialogContent className="max-w-md">
  //         <DialogHeader>
  //           <DialogTitle>Report User</DialogTitle>
  //           <DialogDescription>
  //             {reportReasons.map((reason) => (
  //               <Button key={reason.id} variant="outline" className="text-lg text-gray-700  mt-2" onClick={() => handleReportReason(reason.reason)}>{reason.reason}</Button>
  //             ))}
  //           </DialogDescription>
  //         </DialogHeader>
  //       </DialogContent>
  //     </Dialog>





  //     <div style={{ display: "flex", justifyContent: "center" }}>
  //       {callStarted ?
  //         <div className="w-1/2 h-screen relative">

  //           <div className=" rounded-2xl absolute top-5 left-10 text-white text-2xl font-bold">
  //             <div className="flex items-center gap-2">
  //               <Avatar className="w-10 h-10 rounded-full">
  //                 <AvatarImage src={friendData?.imageUrl} />
  //                 <AvatarFallback>{friendData?.name?.charAt(0)}</AvatarFallback>
  //               </Avatar>
  //               <div className="text-md text-gray-700 mt-2 absolute top-3 right-75">
  //                 <div className="text-lg font-bold">{friendData?.name} </div>
  //                 <div className="text-lg font-bold">{friendData?.city},{friendData?.country} </div>

  //                 <div className="text-sm text-gray-500">{today?.getFullYear() - friendData?.dob?.getFullYear()} </div>
  //               </div>
  //             </div>


  //           </div>
  //           <div className="text-md text-gray-700 mt-2 absolute top-3 right-75">⏱️ Duration: {Math.floor(callDuration / 60)}:{(callDuration % 60).toString().padStart(2, '0')}</div>
  //           <Button className="  z-10 absolute top-3 right-10" variant="outline" onClick={() => setReport(true)}>🚨 </Button>
  //           <Button className="  z-10 absolute top-75 right-50" variant="outline" onClick={() => endCall(true)}>📞</Button>
  //           <video ref={friendVideo} autoPlay muted playsInline className="w-full h-screen object-cover" />
  //         </div>
  //         :
  //         <div className="w-1/2 h-screen relative bg-red-500">
  //           <p className="text-white text-2xl font-bold absolute top-120 left-50">Wait for friend joining...</p>
  //         </div>
  //       }



  //       <div className="w-1/2 h-screen relative">
  //         <Button onClick={() => toggleMic()} className="absolute top-3 left-3 z-10" variant="outline" >{micOn ? "🔇 " : "🎤 "}</Button>
  //         <Button onClick={() => toggleCam()} className="absolute top-15 left-3 z-10" variant="outline">{camOn ? "📷 off " : "📷 on"}</Button>
         
  //         <video ref={myVideo} autoPlay muted playsInline className="w-full h-screen object-cover" />

  //         <ScrollArea className="flex-1 p-4 space-y-4 h-[300px] overflow-y-auto absolute z-20 bottom-80 left-0 right-0">
  //           {messages.length === 0 ? (
  //             <div className="flex flex-col items-center justify-center h-full text-muted-foreground">

  //             </div>
  //           ) : (
  //             messages.map((msg, index) => (
  //               <motion.div
  //                 key={index}
  //                 initial={{ opacity: 0, y: 10 }}
  //                 animate={{ opacity: 1, y: 0 }}
  //                 className={`flex gap-2 ${msg.senderId === socketId ? 'justify-end' : 'justify-start'}`}
  //               >
  //                 <div
  //                   className={`max-w-[75%] rounded-lg px-4 py-2 mt-4 ${msg.senderId === socketId
  //                     ? ' bg-blue-500 text-primary-foreground'
  //                     : ' bg-gray-500 text-primary-foreground'
  //                     }`}
  //                 >
  //                   {msg.content}
  //                 </div>
  //               </motion.div>
  //             ))
  //           )}
  //           <div ref={messagesEndRef} />
  //         </ScrollArea>
  //         <div className="border-t p-4  absolute bottom-0 left-0 right-0 z-20">
  //           <div className="flex items-center space-x-2">

  //             <Button variant="ghost" size="icon" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
  //               <Smile className="h-5 w-5 text-white" />
  //             </Button>
  //             <Input
  //               value={input}
  //               onChange={(e) => setInput(e.target.value)}
  //               placeholder="Type a message..."
  //               className="flex-1 text-white"
  //               onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
  //             />

  //             <Button onClick={sendMessage} size="icon">
  //               <Send className="h-5 w-5" />
  //             </Button>
  //           </div>

  //         </div>

  //       </div>


  //     </div>

  //      </div>
  //     )

  return (
    <div className="bg-yellow-300 h-screen flex flex-col">
      {/* Report Dialog */}
      <Dialog open={report} onOpenChange={setReport}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Report User</DialogTitle>
            <DialogDescription className="grid grid-cols-2 gap-2">
              {reportReasons.map((reason) => (
                <Button 
                  key={reason.id} 
                  variant="outline" 
                  className="text-gray-700 text-sm lg:text-base"
                  onClick={() => handleReportReason(reason.reason)}
                >
                  {reason.reason}
                </Button>
              ))}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
  
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row flex-grow overflow-hidden">
        {/* Remote Video Section */}
        <div className="relative h-[50vh] lg:h-full lg:w-1/2 bg-black">
          {callStarted ? (
            <>
              {/* User Info Overlay */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-black/50 p-2 rounded-lg">
                <Avatar className="w-8 h-8 lg:w-10 lg:h-10">
                  <AvatarImage src={friendData?.imageUrl} />
                  <AvatarFallback>{friendData?.name?.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-white">
                  <div className="text-sm lg:text-base font-bold">{friendData?.name}</div>
                  <div className="text-xs lg:text-sm">
                    {friendData?.city}, {friendData?.country} • 
                    {friendData?.dob ? today?.getFullYear() - friendData.dob.getFullYear() : 'N/A'}
                  </div>
                </div>
              </div>
  
              {/* Call Duration */}
              <div className="text-white text-sm lg:text-base absolute top-3 right-3 bg-black/50 p-2 rounded-lg">
                ⏱️ {Math.floor(callDuration / 60)}:{(callDuration % 60).toString().padStart(2, '0')}
              </div>
  
              {/* Action Buttons */}
              <div className="absolute top-3 right-14 flex gap-2">
                <Button 
                  className="bg-black/50 text-white"
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setReport(true)}
                >
                  🚨
                </Button>
               
              </div>
  
              {/* Friend Request Button */}
                    <Button className="  absolute bottom-3 left-1/2 transform -translate-x-1/2" variant="outline" onClick={() => endCall(true)}>📞</Button>
  
              {/* Remote Video */}
              {friendVideo.current?.srcObject ? (
                <video 
                  ref={friendVideo} 
                  autoPlay  
                  playsInline 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-900">
                  <p className="text-white text-lg">Connecting...</p>
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-red-500">
              <p className="text-white text-xl">Waiting for connection...</p>
            </div>
          )}
        </div>
  
        {/* Local Video Section */}
        <div className="relative h-[50vh] lg:h-full lg:w-1/2 bg-gray-800">
          {/* Control Buttons */}
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
            <Button 
              className="bg-black/50 text-white"
              variant="ghost" 
              size="icon" 
              onClick={() => toggleMic()}
            >
              {micOn ? "🔇" : "🎤"}
            </Button>
            <Button 
              className="bg-black/50 text-white"
              variant="ghost" 
              size="icon" 
              onClick={() => toggleCam()}
            >
              {camOn ? "📷 off" : "📷 on"}
            </Button>
          </div>
          
          <Button 
            className="absolute top-3 right-3 bg-black/50 text-white"
            variant="ghost" 
            size="icon" 
            onClick={() => endCall(true)}
          >
            ❌
          </Button>
          
          {/* Local Video */}
          <video 
            ref={myVideo} 
            autoPlay 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          />
          
          {/* Chat Messages */}
          <div className="absolute bottom-20 left-0 right-0 px-2">
            <div className="max-h-[120px] lg:max-h-[150px] overflow-y-auto bg-black/50 rounded-lg p-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {messages.length === 0 ? (
                <p className="text-gray-400 text-center text-sm py-2">No messages yet</p>
              ) : (
                messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex gap-2 my-1 ${msg.senderId === socketId ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                        msg.senderId === socketId
                          ? 'bg-green-800 text-white'
                          : 'bg-gray-900 text-white'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          
          {/* Message Input */}
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50">
            {showEmojiPicker && (
              <div className="absolute bottom-12 left-2 z-50">
                <EmojiPicker
                  width="100%"
                  height={300}
                  onEmojiClick={(e) => {
                    setInput((prev) => prev + e.emoji);
                    setShowEmojiPicker(false);
                  }}
                />
              </div>
            )}
            
            <div className="flex items-center gap-2">
              <Button 
                className="bg-black/50 text-white"
                variant="ghost" 
                size="icon" 
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              >
                <Smile className="h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
              
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-black/30 text-white border-none"
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              />
              
              <Button 
                className="bg-green-600 hover:bg-green-700 text-white"
                size="icon"
                onClick={sendMessage}
              >
                <Send className="h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );





}

const VideoWithFriend = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VideoWithFriendContent />
    </Suspense>
  );
};

export default VideoWithFriend
