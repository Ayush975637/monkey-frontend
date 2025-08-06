import { SignUp } from '@clerk/nextjs'
import { GalleryVerticalEnd } from "lucide-react"
export default function Page() {
  return   <div className="grid min-h-svh lg:grid-cols-2 bg-gradient-to-br from bg-red-400 via-[#1e293b] to-[#0f172a]">
      <div className="flex flex-col gap-4 p-6 md:p-10">
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
           <SignUp 
            appearance={{
              elements: {
                card: "shadow-none p-0",
                formButtonPrimary:
                  "bg-emerald-600 hover:bg-emerald-700 transition-all",
                footerActionLink:
                  "text-emerald-600 hover:underline hover:text-emerald-800",
              },
              variables: {
                colorPrimary: "#10B981",
                fontSize: "16px",
                borderRadius: "0.75rem",
              },
            }}
           
           
           
           
           ></SignUp>
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/3.png"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
}

