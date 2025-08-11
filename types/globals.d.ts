export {}

declare global {
  interface Window {
    workbox?: any
  }
  interface CustomJwtSessionClaims {
    metadata: {
      onboardingComplete?: boolean
    }
  }
}