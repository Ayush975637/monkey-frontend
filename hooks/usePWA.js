'use client'
import { useEffect } from 'react';

export const usePWA = () => {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.workbox !== undefined &&
      process.env.NODE_ENV === 'production'
    ) {
      const wb = window.workbox;
      
      wb.addEventListener('installed', (event) => {
        if (event.isUpdate) {
          console.log('App updated');
        } else {
          console.log('App installed');
        }
      });

      wb.register();
    }
  }, []);
};