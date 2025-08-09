"use client"
import React from 'react'

import { motion } from "framer-motion";
import { LucideSettings, LucideSparkles } from "lucide-react";
import { Button } from "@/components/ui/button"; // ShadCN Button
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const Header = () => {
  return (
    <div className=" bg-gradient-to-br from-gray-900 to-gray-950 text-white">
        <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-4 flex justify-between items-center border-b border-gray-800"
      >
        <div className="flex items-center gap-2">
          <LucideSparkles className="w-6 h-6 text-purple-400" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            NextChat
          </h1>
        </div>
         <SignedOut>
              <SignInButton />
              <SignUpButton>
                <Button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
          <UserButton></UserButton>
            </SignedIn>
        <Button variant="ghost" size="icon">
          <LucideSettings className="w-5 h-5" />
        </Button>
      </motion.header>
  

    </div>
  )
}

export default Header
