import { clerkMiddleware,createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse,NextRequest } from "next/server";
import arcjet,{detectBot, shield,createMiddleware} from '@arcjet/next';

// const isProtectedRoute=createRouteMatcher([

//     "/videochat(.*)",
//     "/chat(.*)",
//       "/profile(.*)",
//       "/history(.*)",
      
    
   
// ])
const isOnboardingRoute = createRouteMatcher(['/onboarding','/onboarding/step1','/onboarding/step2'])
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/',
  '/about',
  '/contactUs',
  '/premium',
  '/privacy',
  '/terms',
  "/videochat(.*)",
    "/chat(.*)",
      "/profile(.*)",
      "/history(.*)",
"/editprofile(.*)",
])
const isProtectedRoute = createRouteMatcher([
  '/videochat(.*)',
  '/chat(.*)',
  '/profile(.*)',
  '/history(.*)',
  '/editprofile(.*)',
])


export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { userId, sessionClaims, redirectToSignIn } = await auth();


  if (userId && isOnboardingRoute(req)) {
    return NextResponse.next()
  }
  if (!userId && !isPublicRoute(req)) return redirectToSignIn({ returnBackUrl: req.url })

    if (userId && !sessionClaims?.metadata?.onboardingComplete) {
      const onboardingUrl = new URL('/onboarding', req.url)
      return NextResponse.redirect(onboardingUrl)
    }
    if (userId && !isPublicRoute(req)) return NextResponse.next()





 
});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|json|txt|xml)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}