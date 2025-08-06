"use client"

import { useEffect,useContext,useState,createContext } from "react";
import  socket  from "@/lib/socketchat";
import { useUser } from "@clerk/nextjs";

export default function SocketProvider({ children }) {
    const { user } = useUser();
    useEffect(() => {
        if (user) {
            socket.emit("userConnected", { userId: user.id });
        }
        socket.on("connect", () => {
            console.log("🟢 Socket connected:", s.id);
            setSocketId(s.id);
          });

socket.disconnect();

    }, [user]);

    return <>{children}</>;

}