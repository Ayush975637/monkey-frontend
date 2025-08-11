'use client';

import { useEffect } from 'react';

export default function PWAInitializer() {
  useEffect(() => {
    if (typeof window !== 'undefined' &&
        'serviceWorker' in navigator &&
        process.env.NODE_ENV === 'production') {
      const wb = (window as any).workbox;
      if (wb) {
        wb.addEventListener('installed', (event: { isUpdate?: boolean }) => {
          console.log(event?.isUpdate ? 'App updated' : 'App installed');
        });
        wb.register();
      }
    }
  }, []);

  return null;
}