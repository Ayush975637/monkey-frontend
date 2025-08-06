"use client"

import { getfriends } from "@/actions/friend";
import { requestfriend } from "@/actions/friend";
import { Button } from '@/components/ui/button'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { getfriendData } from "@/actions/getprofile";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Search, Trash, X, UserPlus, Send, Smile, Paperclip, Menu, MoreVertical, MessageSquare, Video, Mic, StepBack, SkipBack, ArrowBigLeft, ArrowLeft, Delete } from "lucide-react";
import Link from 'next/link'
import { toast } from "sonner";
import { getChatMessages } from "@/actions/chat";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { getAllfriend } from "@/actions/friend";
import { useEffect, useState, useRef } from "react";
import { getDbId } from "../../actions/chat";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { useSocket } from "@/context/SocketContext";


import { useUser } from "@clerk/nextjs";
import { sendCallRequest } from "@/actions/friend";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import EmojiPicker from 'emoji-picker-react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { useRouter } from "next/navigation";
import ReactAudioPlayer from 'react-audio-player';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [searchResult, setSearchResult] = useState(null);
  const [friends, setFriends] = useState([]);
  const [input, setInput] = useState("");
  const [friendId, setFriendId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [roomId, setRoomId] = useState(null);
  const { user } = useUser();
  const [dbUserId, setDbUserId] = useState(null);
  const [dbFriendId, setDbFriendId] = useState(null);
  const [name, setName] = useState("");
  const [activeFriend, setActiveFriend] = useState(null);
  // const [isMobileView, setIsMobileView] = useState(false);
  const [isMobileView, setIsMobileView] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 1024 : false
  );
  const [showChat, setShowChat] = useState(false);
  const [requestcall, setRequestCall] = useState(false);
  const [callDeclined, setCallDeclined] = useState(false);
  const [callAccepted, setCallAccepted] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [fileSent, setFileSent] = useState(false);
  const [fileType, setFileType] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [friendData, setFriendData] = useState(null);
  const [senderId, setSenderId] = useState(null);
  const [showSidebar,setShowSideBar]=useState(false);
  const endref = useRef(null);
  const router = useRouter();
  const { socket, socketId } = useSocket();

  useEffect(() => {
    endref.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages])



  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobileView(window.innerWidth < 768);

  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  // Replace your useEffect with this
useEffect(() => {
  const checkMobile = () => {
    setIsMobileView(window.innerWidth < 1024); // Using 1024 as breakpoint for lg
  };

  // Run immediately on client
  checkMobile();
  
  window.addEventListener('resize', checkMobile);
  return () => window.removeEventListener('resize', checkMobile);
}, []);

  useEffect(() => {
    const fetchDbIds = async () => {
      if (!user?.id || !friendId) return;
      const u = await getDbId(user.id);
      const f = await getDbId(friendId);
      setDbUserId(u);
      setDbFriendId(f);
    };
    fetchDbIds();
  }, [user?.id, friendId]);

  const handleSearch = async () => {
    if (!name) return toast.error("Please enter an name");
    setLoading(true);
    try {
      const user = await getfriends(name);
      setSearchResult(user || null);
      if (!user) toast.error("User not found");
    } catch (error) {
      toast.error("Error searching for user");
    } finally {
      setLoading(false);
    }
  }


  const handleVideoCall = async () => {
    if (!activeFriend) return toast.error("Please select a friend");

    socket.emit("sendCallRequest", {
      receiverId: activeFriend.id,
      senderId: user.id,

    })


  }



  const handleRecieveCall = async () => {
    socket.emit("acceptCallRequest", {
      receiverId: user.id,
      senderId: senderId,
    })

  }
  const handleDeclineCall = async () => {
    if (!socket) return;
    setIsDrawerOpen(false);
    socket.emit("sendMessage ", {
      receiverId: dbFriendId,
      senderId: dbUserId,
      content: "Call Declined",
    })

    socket.emit("declineCallRequest", {
      receiverId: user.id,
      senderId: senderId,
    })
  }

  useEffect(() => {
    if (!socket) return;
    const handleStartCall = ({ roomId }) => {
      router.push(`/videochatfriend?roomId=${roomId}`);
    };

    // socket.emit("userConnected",{userId:user?.id});

    socket.on("callRequest", (data) => {
      setIsDrawerOpen(true);
      setRequestCall(true);
      setSenderId(data.senderId);

    })
    socket.on("user-offline", (data) => {
      setRequestCall(false);
    })
    socket.on("user-unavailable", (data) => {
      setRequestCall(false);
    })

    socket.on("callCut", (data) => {
      setCallDeclined(true);
      setRequestCall(false);
    })
    // socket.on("callAccepted", (data) => {
    //   setCallAccepted(true);
    // })


    socket.on("friendOnline", ({ userId }) => {
      setIsOnline(true);
    })
    // if(requestcall){
    //   setIsDrawerOpen(true);
    // }
    socket.on("startCall", handleStartCall);


    return () => socket.off("startCall", handleStartCall);

  }), [];

  const handleDataChange = async (e, type) => {
    toast.success("Uploading file");
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data?.secure_url) {
        toast.success("Uploaded successfully");
        setInput(data.secure_url);
        setFileType(type); // "TEXT", "IMAGE", etc.
      } else {
        toast.error(data.error || "Upload failed");
      }
    } catch (err) {
      toast.error("Something went wrong");
      console.error(err);
    }




  }


  const handleAddFriend = async () => {
    if (!searchResult || !user) return;
    const res = await requestfriend(searchResult.id);
    if (!res.success) return toast.error(res.message);

    toast.success("Friend added!");
    toast.success("Friend request successfully sent ")
    setSearchResult(null);
    setName("");
    const friendsList = await getAllfriend(user.id);
    setFriends(friendsList);
  }

  useEffect(() => {
    const fetchFriends = async () => {
      if (!user?.id) return;
      try {
        const friendsList = await getAllfriend(user.id);
        console.log(user.id);
        toast.success(user.id);
        console.log("Fetched Friends:", friendsList);

        setFriends(friendsList);
      } catch (error) {
        console.error("Error fetching friends:", error);
      }
    };
    fetchFriends();
  }, [user]);

  useEffect(() => {
    if (!dbUserId || !dbFriendId) return;
    // socket.emit("userConnected", { userId: dbUserId });
    const fetchChat = async () => {
      const messages = await getChatMessages(dbUserId, dbFriendId);
      setMessages(messages);
    };

    fetchChat();
    const privateRoomId = [dbUserId, dbFriendId].sort().join("-");
    setRoomId(privateRoomId);

    socket.emit("joinFriendRoom", {
      userId: dbUserId,
      friendId: dbFriendId,
    });

    const handleReceive = (msg) => {
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("receiveMessage", handleReceive);
    return () => socket.off("receiveMessage", handleReceive);
  }, [dbUserId, dbFriendId]);

  const sendMessage = () => {
    if (!friendId || !user?.id || !input.trim()) return;

    socket.emit("sendMessage", {
      receiverId: dbFriendId,
      senderId: dbUserId,
      content: input,
      type: fileType ?? "TEXT",
    });
    setInput("");
    setFileType(null);
  };

  const handleDeleteFriend = async (friendId) => {
    const res = await deleteFriend(friendId);
    if (!res.success) return toast.error(res.message);
    toast.success("Friend deleted successfully");
    const friendsList = await getAllfriend(user.id);
    setFriends(friendsList);
  }
  useEffect(()=>{
if(!activeFriend){
setShowSideBar(true);
}
if(activeFriend){
  setShowSideBar(false);
}

  },[activeFriend])




  const handleFriendClick = (friend) => {
    setFriendId(friend.id);
    console.log(friend.id);
    setActiveFriend(friend);
    socket.emit("friendOnline", { userId: friend.id });
    if (isMobileView) {
      setShowChat(true);
    }
  };

  const handleBackToFriends = () => {
    setShowChat(false);
    setActiveFriend(null);
    setShowSideBar(true);
  };


  useEffect(() => {
    const fetchFriendData = async () => {
      const res = await getfriendData(senderId);
      setFriendData(res);
    }
    fetchFriendData();
  }, [senderId]);




  return (
    <div className=" flex flex-row  w-full h-screen   ">
      {/* Sidebar - Always visible on desktop, conditionally on mobile */}
{showSidebar&& <div><d}





















      <div
        className={`
        h-full     ${showSidebar ? 'block' : 'hidden'}  lg:block
         lg:w-1/3 w-full
      
    
    `}
      >
        <div className="h-screen">
        <SidebarProvider>
          <Sidebar className="h-full w-1/3  ">
            <SidebarHeader className="p-4 border-b">
              <div className=" flex flex-row gap-2 items-center  ">
                <Link href="/">
                  <ArrowLeft></ArrowLeft>
                </Link>

                <h2 className="text-xl font-semibold">Chat With Friend</h2>
              </div>


              {isDrawerOpen && (
                <div className="fixed top-4 right-4 bg-white shadow-xl rounded-lg p-4 z-50 w-80 border">
                  <div className="font-semibold">Incoming Call</div>
                  <p className="text-sm text-gray-500">from {friendData?.name}</p>
                  <div className="flex justify-end gap-2 mt-4">
                    <button onClick={handleRecieveCall} className="bg-green-500 text-white px-3 py-1 rounded">Accept</button>
                    <button onClick={handleDeclineCall} className="bg-red-500 text-white px-3 py-1 rounded">Decline</button>
                  </div>
                </div>
              )}









            </SidebarHeader>

            <SidebarContent className="p-4">
              <div className="space-y-4">
                {/* Search Section */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-2 ">
                      <Search className="text-muted-foreground h-5 w-5" />
                      <Input
                        placeholder="Search by name of friend"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                      />
                      <Button
                        onClick={handleSearch}
                        disabled={loading}
                        size="sm"
                      >
                        {loading ? "Searching..." : "Search"}
                      </Button>
                    </div>
                  </CardHeader>
                </Card>

                {/* Search Results */}
                <AnimatePresence>
                  {searchResult && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <Card className="bg-muted ">
                        <CardContent className="p-3 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar>
                              <AvatarImage src={searchResult.imageUrl} />
                              <AvatarFallback>
                                {searchResult.name?.[0]?.toUpperCase() || "U"}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{searchResult.name || "Unnamed User"}</p>
                              {/* <p className="text-sm text-muted-foreground">{searchResult.email}</p> */}
                            </div>
                          </div>
                          <Button
                            onClick={handleAddFriend}
                            variant="outline"
                            size="sm"
                          >
                            <UserPlus className="mr-2 h-4 w-4" /> Add
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Friends List */}
                <div className="space-y-2 ">
                  <h4 className="text-sm font-medium text-muted-foreground">FRIENDS</h4>
                  <Separator />
                  {friends?.length > 0 ? (
                    <ScrollArea className="h-[calc(100vh-250px)]">
                      {friends.map((friend) => (
                        <motion.div
                          key={friend.id}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleFriendClick(friend)}
                          className={`p-3 rounded-lg cursor-pointer flex items-center space-x-3 ${activeFriend?.id === friend.id ? 'bg-accent' : 'hover:bg-muted'
                            }`}
                        >
                          <Avatar>
                            <AvatarImage src={friend.imageUrl} />
                            <AvatarFallback>{friend.name?.[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{friend.name}</p>

                          </div>
                          <Dialog>
                            <DialogTrigger> <Trash className="h-5 w-5 text-red-500" /></DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Delete Friend</DialogTitle>
                                <DialogDescription>
                                  Are you sure you want to sure delete this friend?
                                </DialogDescription>
                              </DialogHeader>
                              <DialogFooter>
                                <DialogTrigger><Button variant="outline">Cancel</Button></DialogTrigger>

                                <Button variant="destructive" onClick={() => handleDeleteFriend(friend.id)}>Delete</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>

                        </motion.div>
                      ))}
                    </ScrollArea>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <p>No friends yet</p>
                      <p className="text-sm">Add friends to start chatting</p>
                    </div>
                  )}
                </div>
              </div>
            </SidebarContent>
          </Sidebar>
        </SidebarProvider>
        </div>
      </div>

      {/* Chat Area */}

      <div
        className={`
       h-full  ${ activeFriend == null ? 'hidden' : 'block'}  w-full lg:w-2/3 

      
      
    
    `}
      >
        {activeFriend ? (
          <>
            {/* Chat Header */}
            <div className="border-b p-2 flex items-center justify-between bg-card  ">
              {isMobileView && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleBackToFriends}
                  className="mr-2"
                >
                  <ArrowLeft className="w-5 h-5"></ArrowLeft>
                </Button>
              )}
              <div className="flex items-center space-x-3 flex-1">
                <Avatar>
                  <AvatarImage src={activeFriend.imageUrl} />
                  <AvatarFallback>{activeFriend.name?.[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{activeFriend.name}</h3>
                  <p className="text-sm text-muted-foreground">{isOnline ? " 🟢Online" : " 🔴Offline"}</p>

                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={handleVideoCall}>
                <Video className="h-5 w-5" />
              </Button>
            </div>






            {/* Messages */}
            <ScrollArea className="flex-1 p-4 h-[calc(100vh-150px)]">
              <div className="space-y-4 p-1">
                {messages.length === 0 ? (

                  <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                    <MessageSquare className="h-12 w-12 mb-2" />
                    <p>No messages yet</p>
                    <p className="text-sm">Start a conversation!</p>






                  </div>


                ) : (
                  messages.map((msg) => (

                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.senderId === dbUserId ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[75%] ${msg.type === "TEXT" || msg.type === "FILE" || msg.type === "AUDIO"
                          ? `rounded-lg px-4 py-2 ${msg.senderId === dbUserId ? 'bg-primary text-primary-foreground' : 'bg-muted'}`
                          : '' // No background for images/videos
                          }`}
                      >
                        {msg.type === "IMAGE" && (
                          <img src={msg.content} alt="image" className="w-full h-auto rounded-lg" />
                        )}

                        {msg.type === "VIDEO" && (
                          <video
                            src={msg.content}
                            controls

                            className="w-full max-w-[350px] h-auto rounded-lg"
                          />
                        )}



                        {msg.type === "TEXT" && msg.content}

                        <div ref={endref}></div>
                      </div>
                    </motion.div>

                  ))
                )}

              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="border-t p-4 bg-card  ">
              <div className="flex items-center space-x-2">

                <Button variant="ghost" size="icon" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                  <Smile className="h-5 w-5" />
                </Button>





















                <DropdownMenu>
                  <DropdownMenuTrigger><Paperclip className="h-5 w-5" /></DropdownMenuTrigger>
                  <DropdownMenuContent className="flex flex-col gap-2" >
                    <label className="cursor-pointer">
                      📷 Image
                      <input type="file" accept="image/*" className="hidden" onChange={(e) => handleDataChange(e, "IMAGE")} />
                    </label>

                    <label className="cursor-pointer">
                      🎥 Video
                      <input type="file" accept="video/*" className="hidden" onChange={(e) => handleDataChange(e, "VIDEO")} />
                    </label>




                  </DropdownMenuContent>
                </DropdownMenu>
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1"
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                />

                <Button onClick={sendMessage} size="icon">
                  <Send className="h-5 w-5" />
                </Button>
              </div>

              {showEmojiPicker && (
                <div className="absolute bottom-16 left-2 z-50">
                  <EmojiPicker
                    onEmojiClick={(e) => {
                      setInput((prev) => prev + e.emoji);
                      setShowEmojiPicker(false);
                    }}
                  />
                </div>
              )}

            </div>
          </>
        ) : (
          isMobileView && (
            <div className="flex-1 flex items-center justify-center text-muted-foreground">
              <div className="text-center space-y-2">
                <MessageSquare className="h-12 w-12 mx-auto" />
                <h3 className="text-lg font-medium">Select a chat</h3>
                <p className="text-sm">Choose a friend to start messaging</p>
              </div>
            </div>
          )
        )}
      </div>

    </div>
  );
  
};

export default ChatPage;