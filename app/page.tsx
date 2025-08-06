"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useSocket } from "@/context/SocketContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { 
  LucideHome, 
  LucideVideo, 
  LucideMessageSquare, 
  LucideUser, 
  LucideSettings, 
  Clock,
  LucideSparkles,
  LucideZap,
  LucideHeart,
  LucideGlobe,
  LucideShield,
  LucideUsers,
  LucidePlay,
  LucideMic,
  LucideCamera,
  Menu,
  Coins,
  Crown,
  LogOut,
  
} from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from 'next/link'; 
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { SignOutButton } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";
import { checkUser } from "@/actions/video";
import { Outlines } from "@react-three/drei";

const coins=[
  {id:1,name:"100 coins",price:100},
  {id:2,name:"200 coins",price:200},
  {id:3,name:"300 coins",price:300},
  {id:4,name:"400 coins",price:400},
  {id:5,name:"500 coins",price:500},
  {id:6,name:"1000 coins",price:1000},
]






const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);
  const[numOnline,setNumOnline]=useState(1170);
   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
   const { user } = useUser();
   const router = useRouter();
   const {socket,socketId} = useSocket();




  useEffect(() => {
    if(!socket) return;
// socket.emit("userConnected", { userId: user?.id });
socket.on("numOnline",(num)=>{
  setNumOnline(num+numOnline);
})

    setIsLoaded(true);
  }, [socket]);

  // Bottom nav items
  const navItems = [
    { id: "home", icon: <LucideHome className="w-5 h-5" />, label: "Home",path:"" },
    { id: "history", icon: <Clock className="w-5 h-5" />, label: "History",path:"history" },
    { id: "chat", icon: <LucideMessageSquare className="w-5 h-5" />, label: "Chat",path:"chat" },
    { id: "profile", icon: <LucideUser className="w-5 h-5" />, label: "Profile",path:"profile" },
  ];
  const handleCoins=()=>{
   
  }
  // Floating particles animation
  // const FloatingParticles = () => (


  //   <div className="absolute inset-0 overflow-hidden pointer-events-none">
  //     {[...Array(20)].map((_, i) => (
  //       <motion.div
  //         key={i}
  //         className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"
  //         initial={{
  //           x: Math.random() * window.innerWidth,
  //           y: Math.random() * window.innerHeight,
  //         }}
  //         animate={{
  //           y: [-50, window.innerHeight+50],
  //           x: [0, Math.random() * 50 - 25, 0],
  //           opacity: [0.2, 0.8, 0.2],
  //         }}
  //         transition={{
  //           duration: 3 + Math.random() * 2,
  //           repeat: Infinity,
  //           delay: Math.random() * 2,
  //         }}
  //       />
  //     ))}
  //   </div>
  // );

  const FloatingParticles = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Safe access to window
    if (typeof window !== "undefined") {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  if (!dimensions.width) return null; // Prevent render before width is set

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(25)].map((_, i) => {
        const startX = Math.random() * dimensions.width;
        const delay = Math.random() * 3;
        const duration = 5 + Math.random() * 5;

        return (
          <motion.div
            key={i}
            initial={{ x: startX, y: -50, opacity: 0 }}
            animate={{ y: dimensions.height + 50, opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: 0,
              fontSize: "24px",
             
            }}
          >
            🤣
          </motion.div>
        );
      })}
    </div>
  );
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-9 to-slate-900 text-white relative overflow-hidden">
      <FloatingParticles />
   
      {/* Main Content */}
      <main className="pb-24 md:pb-8 relative z-10">
        <div className="container mx-auto p-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.8, ease:"easeIn" }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isLoaded ? 1 : 0 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              {/* <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                <LucideSparkles className="w-10 h-10 text-white" />
              </div> */}






<div className="absolute top-0 left-0 right-0 w-full flex flex-row gap-4 justify-between items-center px-4 py-3  rounded-b-xl md:justify-around z-20 ">

  <div className="flex items-center z-10 gap-5">
    {/* <Link href="/sign-in"><Button variant="outline" className="text-black" >Sign in</Button></Link> */}
    <div className="z-60">
    
            </div><Dialog>
  <DialogTrigger>   <Coins size={40} className="z-10 text-yellow-300 "></Coins></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Select Recharge</DialogTitle>
      <DialogDescription>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          
          {coins.map((coin)=>(
            <motion.div 
            initial={{scale:1}}
            whileHover={{scale:1.2}}
            whileTap={{scale:.9}}
            
            >
            <Card key={coin.id}>
              <CardHeader>
                <CardTitle>
                  <div className="text-orange-400 text-md ">🪙{coin.name}</div>
                    </CardTitle>
                
                </CardHeader>
                <CardContent>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    
                    
                  ₹ {coin.price} </Button>
                </CardContent>
              </Card>
              </motion.div>
                ))}
                </div>
              
     
      
      </DialogDescription>
    </DialogHeader>

<motion.button
initial={{scale:1}}
whileHover={{scale:1.2}}
whileTap={{scale:.9}}

className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-b-xl text-xl">Pay now</motion.button>

  </DialogContent>
</Dialog>
           
              
              </div>

<div className="z-10 ">
              <NavigationMenu className="z-10 hidden md:flex ">
  <NavigationMenuList className="gap-18 text-black text-xl md:text-2xl  font-bold ">
    
     <NavigationMenuItem>
      <motion.div
      initial={{scale:1,opacity:0,x:-50}}
      whileHover={{scale:1.2}}
      whileTap={{scale:.9}}
      animate={{opacity:1,x:0}}
      transition={{}}
      
      >
      <Link href="/" >
        <NavigationMenuLink className="px-3 py-2 bg-gray-100 rounded-md transition-colors">
          Home
        </NavigationMenuLink>
      </Link>
      </motion.div>
    </NavigationMenuItem>
   
   <NavigationMenuItem>
      <Link href="/history" >
        <NavigationMenuLink className="px-3 py-2 bg-gray-100 rounded-md transition-colors">
         History
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
     <NavigationMenuItem>
      <Link href="/chat" >
        <NavigationMenuLink className="px-3 py-2 bg-gray-100 rounded-md transition-colors">
         Chat
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <Link href="/profile" >
        <NavigationMenuLink className="px-3 py-2 bg-gray-100 rounded-md transition-colors">
          Profile
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>


  </NavigationMenuList>
</NavigationMenu>
</div>
<div className="flex items-center gap-5 z-10 ">
   <SignedOut>
              <SignInButton />
             
            </SignedOut>
  <div className="items-center gap-1 z-10">
   <Link href="/premium" >
              <Crown size={40} className="z-10 text-green-400"></Crown>
              </Link>
              </div>
              <div className="z-10">
             <DropdownMenu  >
  <DropdownMenuTrigger><Menu size={40} className="text-blue-400"></Menu></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel></DropdownMenuLabel>
 
    <Link href="/privacy" >
    <DropdownMenuItem>Privacy Policy</DropdownMenuItem>
    </Link>
    <Link href="/terms" >
    <DropdownMenuItem>Terms Of Service</DropdownMenuItem>
    </Link>
    <Link href="/contactUs" >
    <DropdownMenuItem>Contact Us</DropdownMenuItem>
    </Link>
    
    <Link href="/account" >
    <DropdownMenuItem>Account & Security</DropdownMenuItem>
    </Link>
    <DropdownMenuSeparator />
    <DropdownMenuItem>
       
           <SignOutButton />
           <LogOut size={20} className="text-red-400"></LogOut>
      
      
      </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</div>
</div>
</div>

            </motion.div>

  

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mt-15"
            >
             ChikChak
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Connect with the world, one chat at a time
            </motion.p>
          </motion.div>

  <video
  preload="auto" 
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover  z-[-10] opacity-40"
      >
        <source src="/c.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 mt-70"
          >
            {/* Video Chat Card */}
     
            <Link href="/videochat">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer backdrop-blur-md"
            >

              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <LucideVideo className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <LucideZap className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold mb-2">Video Chat</h3>
                <p className="text-gray-300 mb-4">Connect face-to-face with people worldwide</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  {/* <LucideUsers className="w-4 h-4" /> */}
                  <span> 👨🏽👩🏽{numOnline} online now</span>
                </div>
              </div>
            </motion.div>
</Link>
            {/* Text Chat Card */}
            <Link href="/chat">
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <LucideMessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <LucideHeart className="w-6 h-6 text-red-400" />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold mb-2">Text Chat</h3>
                <p className="text-gray-300 mb-4">Share thoughts and make new friends</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  {/* <LucideGlobe className="w-4 h-4" /> */}
                  <span> 🌍 50+ countries</span>
                </div>
              </div>
            </motion.div>
            </Link>
          </motion.div>

          {/* Features Grid */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {[
              { icon: <LucideShield className="w-6 h-6" />, title: "Secure", desc: "End-to-end encrypted" },
              { icon: <LucideUsers className="w-6 h-6" />, title: "10K+ Users", desc: "Active community" },
              { icon: <LucideGlobe className="w-6 h-6" />, title: "Global", desc: "Worldwide connections" },
              { icon: <LucideSparkles className="w-6 h-6" />, title: "Premium", desc: "Ad-free experience" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  {feature.icon}
                </div>
                <h4 className="font-semibold mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div> */}

          {/* Recent Activity */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-400" />
              Recent Activity
            </h3>
            <div className="space-y-3">
              {[
                { type: "video", user: "Alex", time: "2 min ago" },
                { type: "text", user: "Sarah", time: "5 min ago" },
                { type: "video", user: "Mike", time: "8 min ago" },
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.6 }}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.type === "video" 
                      ? "bg-purple-500/20" 
                      : "bg-blue-500/20"
                  }`}>
                    {activity.type === "video" ? (
                      <LucideVideo className="w-4 h-4 text-purple-400" />
                    ) : (
                      <LucideMessageSquare className="w-4 h-4 text-blue-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.user}</p>
                    <p className="text-sm text-gray-400">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </main>

      {/* Bottom Navigation Bar (Mobile Only) */}
      <AnimatePresence>
        <motion.nav
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="mx-4 mb-4">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2">
              <div className="flex justify-around items-center">
                {navItems.map((item, index) => (
                  <Link href={`/${item.path}`}    key={item.id} >
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    whileTap={{ scale: 0.9 }}
                    className="relative flex flex-col items-center p-3 rounded-xl transition-all duration-300"
                  >
                    <AnimatePresence>
                      {activeTab === item.id && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </AnimatePresence>
                    
                    <motion.div
                      animate={{
                        scale: activeTab === item.id ? 1.2 : 1,
                        color: activeTab === item.id ? "#a855f7" : "#9ca3af",
                      }}
                      transition={{ type: "spring", stiffness: 500 }}
                      className="relative z-10"
                    >
                      {item.icon}
                    </motion.div>
                    
                    <motion.span
                      animate={{
                        color: activeTab === item.id ? "#a855f7" : "#9ca3af",
                      }}
                      className="text-xs mt-1 relative z-10 font-medium"
                    >
                      {item.label}
                    </motion.span>
                  </motion.button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>
      </AnimatePresence>
    </div>
  );
};

export default App;