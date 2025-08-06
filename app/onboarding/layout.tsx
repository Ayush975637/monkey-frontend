import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  if ((await auth()).sessionClaims?.metadata.onboardingComplete === true) {
    redirect('/')
  }

  return <>
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">👋 Complete Your Profile</h2>
        {children}
      </div>
    </div>
  
  
  
  
  </>
}