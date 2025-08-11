"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";

import { useUser } from "@clerk/nextjs"; // 👈 import Clerk hook
import { useRouter } from "next/navigation";
import SimplePeer from "simple-peer";
import { Button } from "@/components/ui/button";
import { getDbId } from "@/actions/chat";
import { Send, Smile } from "lucide-react";
import { Input } from "@/components/ui/input";

import { getReportedUser } from "@/actions/report";

import { savehistory1, savehistory2 } from "@/actions/history";
import { getfriendData } from "@/actions/getprofile";
import { requestfriend } from "@/actions/friend";
import EmojiPicker from 'emoji-picker-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog";
import { reportUser } from "@/actions/report";
import { toast } from "sonner";
import { useSocket } from "@/context/SocketContext";
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
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";






export default function Call() {

  const { isLoaded, isSignedIn, user } = useUser();
  const { socket, socketId } = useSocket(); // 👈 load Clerk
  const router = useRouter();
  const myVideo = useRef<HTMLVideoElement>(null);
  const userVideo = useRef<HTMLVideoElement>(null);

  const streamRef = useRef<MediaStream | null>(null);
  const peerRef = useRef<SimplePeer.Instance | null>(null);
  const [micOn, setMicOn] = useState(true);
  const [camOn, setCamOn] = useState(true);
  const [callDuration, setCallDuration] = useState(0);
  const callTimerRef = useRef<NodeJS.Timeout | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<{ senderId: string; content: string }[]>([]);
  const [callStarted, setCallStarted] = useState(false);
  const [friendId, setFriendId] = useState<string | null>(null);
  const [input, setInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [report, setReport] = useState(false);

  const [friendClerkId, setFriendClerkId] = useState<string | null>(null);
  const [dbFriendId, setDbFriendId] = useState<string | null>(null);
  const [ended] = useState(false);
  const [reportedCount, setReportedCount] = useState(0);
  const [roomId, setRoomId] = useState<string | null>(null);
  const [historyId, setHistoryId] = useState<string | null>(null);
  const [friendData, setFriendData] = useState<{
    imageUrl?: string;
    name?: string;
    city?: string;
    country?: string;
    dob?: Date;
  } | null>(null);
  const today = new Date();

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

  const endCall = useCallback((shouldStopStream = true) => {
    if (callTimerRef.current) {
      if (callTimerRef.current) clearInterval(callTimerRef.current);
    }
    setCallDuration(0);
    setCallStarted(false);
    setFriendId(null);
    setFriendClerkId(null);

    if (peerRef.current) {
      peerRef.current.destroy();
      peerRef.current = null;
    }
    if (shouldStopStream && streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    router.push("/");
    setMessages([]);
  }, [router]);



  useEffect(() => {
    const setupStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        console.log("🎥 Got local stream");
        streamRef.current = stream;
        if (myVideo.current) myVideo.current.srcObject = stream;
                  if (socket) socket.emit("userReady");
        console.log("📡 Socket ready, stream set");
      } catch (err) {
        console.error("❌ Failed to access media devices", err);
      }
    };
  
    setupStream();
  
    return () => {
       endCall(false); 
    };
  }, [socket, endCall]);
  
  useEffect(() => {
    if ( !socket || !streamRef.current) return;
  
    const handleReceive = (msg: { senderId: string; content: string }) => {
      console.log("📨 Chat message received:", msg);
      setMessages((prev) => [...prev, msg]);
    };
  
    const handleRoomId = (roomId: string) => {
      console.log("🔞 Room ID received:", roomId);
      setRoomId(roomId);
    };
  
    const handleGetClerkId = (clerkId: string) => {
      console.log("👤 Friend's Clerk ID:", clerkId);
      setFriendClerkId(clerkId);
    };
  
    const handleMatch = (peerId: string) => {
      console.log("🔥 Matched with:", peerId);
      setFriendId(peerId);
      socket.emit("findClerkId", peerId);
  
      if (peerRef.current) {
        peerRef.current.destroy();

        peerRef.current = null;
       }// safety
      const peer = new SimplePeer({
        initiator: true,
        trickle: false,
        stream: streamRef.current || undefined,
      });
  
      peer.on("signal", (signalData) => {
        console.log("📤 Sending signal to peer:", signalData);
        socket.emit("signal", { peerId, signalData });
      });
  
      peer.on("stream", (remoteStream) => {
        console.log("📥 Received remote stream");
        if (userVideo.current) userVideo.current.srcObject = remoteStream;
        setCallStarted(true);
        // remoteStream.getTracks().forEach(track => {
        //   console.log(`${track.kind} track:`, track.readyState, track.enabled ? 'enabled' : 'disabled');
        // });
        // if (userVideo.current) userVideo.current.srcObject = remoteStream;
        // if (userVideo.current) {
        //   console.log("Assigning stream to video element");
        //   setCallStarted(true);
        //   userVideo.current.srcObject = remoteStream;
          
        //   // Add event listeners to track stream status
          
        // } 
      });
  
      peer.on("connect", () => {
        console.log("✅ Peer connection established");
        console.log("✅ Peer connection established");
  console.log("Local tracks:", streamRef.current?.getTracks());
  console.log("Remote tracks:", peerRef.current?.streams?.[0]?.getTracks());
       

        callTimerRef.current = setInterval(() => {
          setCallDuration((prev) => prev + 1);
        }, 1000);
      });
  
      // peer.on("error", (err) => {
      //   console.error("❌ Peer error:", err);
      // });
  
      peerRef.current = peer;
    };
  
    const handleSignal = ({ peerId, signalData }: { peerId: string; signalData: unknown }) => {
      console.log("📨 Received signal from peer:", peerId);
      setFriendId(peerId);
      socket.emit("findClerkId", peerId);
  
      if (!peerRef.current) {
        const peer = new SimplePeer({
          initiator: false,
          trickle: false,
          stream: streamRef.current || undefined,
        });
  
        peer.on("signal", (answerSignal) => {
          console.log("📤 Sending answer signal");
          socket.emit("signal", { peerId, signalData: answerSignal });
        });
  
        peer.on("stream", (remoteStream) => {
          console.log("📥 Received remote stream");
          if (userVideo.current) userVideo.current.srcObject = remoteStream;
          setCallStarted(true);
          // if (userVideo.current) userVideo.current.srcObject = remoteStream;
          // if (userVideo.current) {
          //   console.log("Assigning stream to video element");
          //    setCallStarted(true);
          //   userVideo.current.srcObject = remoteStream;
           
            
          // }
        });
  
        peer.on("connect", () => {
          console.log("✅ Peer connection established");
          console.log("✅ Peer connection established");
  console.log("Local tracks:", streamRef.current?.getTracks());
  console.log("Remote tracks:", peerRef.current?.streams?.[0]?.getTracks());
          
  
          callTimerRef.current = setInterval(() => {
            setCallDuration((prev) => prev + 1);
          }, 1000);
        });
  
        // peer.on("error", (err) => {
        //   console.error("❌ Peer error:", err);
        // });
  
        peer.signal(signalData as SimplePeer.SignalData);
        peerRef.current = peer;
      } else {
        peerRef.current.signal(signalData as SimplePeer.SignalData);
      }
    };
  
    // Register handlers
    socket.on("recievemessagewithvideo", handleReceive);
    socket.on("roomId", handleRoomId);
    socket.on("getClerkId", handleGetClerkId);
    socket.on("match", handleMatch);
    socket.on("signal", handleSignal);
  
    // Let server know you're ready (AFTER stream ready)
    socket.emit("userReady");
  
    // Clean up on unmount
    return () => {
      console.log("🧹 Cleaning up socket listeners");
      socket.off("recievemessagewithvideo", handleReceive);
      socket.off("roomId", handleRoomId);
      socket.off("getClerkId", handleGetClerkId);
      socket.off("match", handleMatch);
      socket.off("signal", handleSignal);
  
      if (peerRef.current) peerRef.current.destroy();
      if (callTimerRef.current) clearInterval(callTimerRef.current);
      setCallDuration(0);
    };
  }, [isLoaded, isSignedIn, socket]);
  

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


  const skipUser = () => {
    if (!socket) return;


    socket.emit("skip", { peerId: friendId });
    if (callTimerRef.current) {
      if (callTimerRef.current) clearInterval(callTimerRef.current);
      callTimerRef.current = null;
    }

    if (peerRef.current) {
      peerRef.current.destroy();
      peerRef.current = null;
    }

    setCallStarted(false);
    setCallDuration(0);
    setFriendClerkId(null);
    setFriendId(null);
    setMessages([]);

    socket.emit("findNext");
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleReportReason = async (reason: string) => {
    setReport(false);

    try {
      if (!user?.id || !friendClerkId || !reason) return;


      const res = await reportUser(user.id, friendClerkId, reason);

      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success("Reported successfully");
        socket.emit("findNext");
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


    const fetchReportedUser = async () => {
      const res = await getReportedUser();
      setReportedCount(res);
    }
    fetchFriendData();
    fetchReportedUser();
  }, [roomId,friendClerkId]);

  useEffect(() => {
    if (callStarted && dbFriendId && roomId) {
     
      const saveHistory = async () => {
        const res = await savehistory1(dbFriendId, roomId);
        if (res?.error) {
          toast.error(res.error);
        }
        setHistoryId(res.historyId);
      }
      saveHistory();
    }
  }, [callStarted, dbFriendId, roomId])

useEffect(()=>{
  if (ended && historyId) {
    const saveHistory = async () => {
      const res = await savehistory2(historyId);
      if (res?.error) {
        toast.error(res.error);
      }
    }
    saveHistory();
  }
},[ended, historyId]);





  useEffect(() => {
    const fetchDbIds = async () => {
      if (!friendClerkId) return;

      const f = await getDbId(friendClerkId);

      setDbFriendId(f);
    };
    fetchDbIds();
  }, [friendClerkId]);
  const handleFriendRequest = async () => {
    if (!user?.id || !dbFriendId) return;
    const res = await requestfriend(dbFriendId);
    if (res?.error) {
      toast.error(res.error);
    }
    else {
      toast.success("Friend request sent successfully");
    }
  }
  // ⛔ Do nothing if Clerk not ready




  if (reportedCount >= 5) {
    toast.error("You have been reported 5 times, please contact support");
    return null;
  }
  if (!isLoaded) return <div>Loading...</div>;

  // 🚫 Redirect to login if not signed in
  if (!isSignedIn) {
    router.push("/sign-in?redirect_url=/videochat");
    return null;
  }




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
                <Button 
                  className="bg-black/50 text-white"
                  variant="ghost" 
                  size="icon" 
                  onClick={skipUser}
                >
                  ⏭️
                </Button>
              </div>
  
              {/* Friend Request Button */}
              <Button 
                className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/50 text-white"
                variant="ghost"
                onClick={handleFriendRequest}
              >
                🫰🏽 Send friend request
              </Button>
              <video 
                  ref={userVideo} 
                  autoPlay  
                  playsInline 
                  className="w-full h-full object-cover"
                />
  
              {/* Remote Video */}
             
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
              className=" text-white"
              variant="ghost" 
              size="icon" 
              onClick={() => toggleMic()}
            >
              {micOn ? "🔇" : "🎤"}
            </Button>
            <Button 
              className=" text-white text-lg"
              variant="ghost" 
              size="icon" 
              onClick={() => toggleCam()}
            >
              {camOn ? "📷 off" : "📷 on"}
            </Button>
          </div>
          
          <Button 
            className="absolute top-3 right-3 z-20  text-white"
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
            <div className="max-h-[120px] lg:max-h-[150px] overflow-y-auto  rounded-lg p-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
