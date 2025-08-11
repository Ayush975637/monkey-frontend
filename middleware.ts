// import { clerkMiddleware,createRouteMatcher } from '@clerk/nextjs/server'
// import { NextResponse,NextRequest } from "next/server";

// const isOnboardingRoute = createRouteMatcher(['/onboarding','/onboarding/step1','/onboarding/step2'])
// const isPublicRoute = createRouteMatcher([
//   '/sign-in(.*)',
//   '/sign-up(.*)',
//   '/',
//   '/about',
//   '/contactUs',
//   '/premium',
//   '/privacy',
//   '/terms',
  
// ])



// export default clerkMiddleware(async (auth, req: NextRequest) => {
//   const authData = await auth();
//   if (!authData) return redirectToSignIn();
//   const { userId, sessionClaims, redirectToSignIn } = authData;

//   if (isPublicRoute(req)) {
//     return NextResponse.next();
//   }
 

//   if (userId && isOnboardingRoute(req)) {
//     return NextResponse.next()
//   }
//   if (!userId && !isPublicRoute(req)) return redirectToSignIn({ returnBackUrl: req.url })

//     if (userId && !sessionClaims?.metadata?.onboardingComplete) {
//       const onboardingUrl = new URL('/onboarding', req.url)
//       return NextResponse.redirect(onboardingUrl)
//     }
//     if (userId && !isPublicRoute(req)) return NextResponse.next()





 
// });


// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|json|txt|xml)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// }
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse, NextRequest } from 'next/server';

const isOnboardingRoute = createRouteMatcher(['/onboarding(.*)']);
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/',
  '/about',
  '/contactUs',
  '/premium',
  '/privacy',
  '/terms',
]);
const isProtectedRoute = createRouteMatcher([
  '/videochat(.*)',
  '/chat(.*)',
  '/profile(.*)',
  '/history(.*)',
  '/editprofile(.*)',
]);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const authData = await auth();
  if (!authData) return authData.redirectToSignIn();

  const { userId, sessionClaims, redirectToSignIn } = authData;

  // Allow public routes without auth
  if (isPublicRoute(req)) return NextResponse.next();

  // Redirect unauthenticated users from protected routes
  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  // Force onboarding if incomplete
  if (userId && !sessionClaims?.metadata?.onboardingComplete && !isOnboardingRoute(req)) {
    return NextResponse.redirect(new URL('/onboarding', req.url));
  }

  // Default allow
  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|json|txt|xml)).*)',
    '/(api|trpc)(.*)',
  ],
};
