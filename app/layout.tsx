import type { Metadata } from "next";
import {SocketProvider} from "@/context/SocketContext";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  
} from '@clerk/nextjs'
import PWAInitializer from "@/components/PWA";
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
  themeColor: "#ffffff",
  icons:{
    icon: [
      { url: "/icons/192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/512.png", sizes: "512x512", type: "image/png" }
    ],
    apple:"/icons/apple-icon.png",
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
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
        <PWAInitializer />
        </body>

    </html>
    </ClerkProvider>
  );
}
