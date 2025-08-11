export {}

declare global {
  interface WorkboxLike {
    addEventListener: (
      type: string,
      callback: (event: { isUpdate?: boolean }) => void
    ) => void
    register: () => void
  }

  interface Window {
    workbox?: WorkboxLike
  }
  interface CustomJwtSessionClaims {
    metadata: {
      onboardingComplete?: boolean
    }
  }
}