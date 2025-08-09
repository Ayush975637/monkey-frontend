'use client';

import { useEffect } from 'react';

export default function PWAInitializer() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 
        'serviceWorker' in navigator && 
        window.workbox !== undefined && 
        process.env.NODE_ENV === 'production') {
      const wb = window.workbox;
      wb.addEventListener('installed', (event) => {
        console.log(event.isUpdate ? 'App updated' : 'App installed');
      });
      wb.register();
    }
  }, []);

  return null;
}