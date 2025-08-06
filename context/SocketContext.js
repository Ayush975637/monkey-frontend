"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import connectSocket from "@/lib/socket";
import { useUser } from "@clerk/nextjs";

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export function SocketProvider({ children }) {
  const { user, isLoaded, isSignedIn } = useUser();
  const [socket, setSocket] = useState(null);
  const [socketId, setSocketId] = useState(null);

  useEffect(() => {
    if (!isLoaded || !isSignedIn || !user) return;

    const s = connectSocket();
    setSocket(s);

    s.on("connect", () => {
      console.log("🟢 Connected:", s.id);
      setSocketId(s.id);
      s.emit("userConnected", { userId: user.id });
    });

    s.on("disconnect", () => {
      console.log("🔴 Disconnected");
      setSocketId(null);
    });

    return () => {
      s.disconnect();
    };
  }, [isLoaded, isSignedIn, user]);

  return (
    <SocketContext.Provider value={{ socket, socketId }}>
      {children}
    </SocketContext.Provider>
  );
}
