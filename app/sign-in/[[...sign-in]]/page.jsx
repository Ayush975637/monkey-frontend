// pages/sign-in.tsx
'use client'

import { SignIn, useUser } from '@clerk/nextjs'

import { GalleryVerticalEnd } from "lucide-react"
export default function SignInPage() {
  const { isSignedIn, isLoaded } = useUser()
 

  if (!isLoaded || isSignedIn) return null

  return (
     <div className="grid min-h-svh lg:grid-cols-2 bg-gradient-to-br from bg-yellow-400 via bg-yellow-300 to-[#0f172a] ">
      <div className="flex flex-col gap-4 p-4 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            ChikChak
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
           <SignIn
 appearance={{
  elements: {
    card: "shadow-none p-0",
    formButtonPrimary:
      "bg-indigo-600 hover:bg-indigo-700 transition-all",
    footerActionLink:
      "text-indigo-600 hover:underline hover:text-indigo-800",
  },
  variables: {
    colorPrimary: "#6366F1",
    fontSize: "16px",
    borderRadius: "0.75rem",
  },
}}




      path="/sign-in"
      routing="path"
      signUpUrl="/sign-up"
      redirectUrl="/chat"// ✅ Let middleware handle redirection to onboarding
    />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/2.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
   
  )
}



