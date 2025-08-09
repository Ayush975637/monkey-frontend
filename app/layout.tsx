import type { Metadata } from "next";
import {SocketProvider} from "@/context/SocketContext";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  
} from '@clerk/nextjs'
import { usePWA } from "@/hooks/usePWA";
import { Toaster } from "sonner";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spider-VideoChat app",
  description: "A funny video chat app",
  manifest:"/manifest.json",
  icons:{
    icon:"/1921.png",
    apple:"/apple-icon.png",
    
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  usePWA();
  return (
     <ClerkProvider>
    <html lang="en" suppressHydrationWarning >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header></Header> */}
        <SocketProvider>
        <main className="">{children}</main>
        </SocketProvider>
        <Toaster />
        </body>

    </html>
    </ClerkProvider>
  );
}
