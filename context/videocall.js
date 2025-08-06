import { createContext } from "react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer";
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  import { Button } from "@/components/ui/button"
export const VideoCallContext = createContext();

export const VideoCallProvider = ({ children }) => {



    
  return <VideoCallContext.Provider value={{}}>{children}</VideoCallContext.Provider>;
};

