// hooks/useShakeDetection.ts
import { useEffect } from 'react';

export function useShakeDetection() {
  useEffect(() => {
    const threshold = 15;
    let lastX: number, lastY: number, lastZ: number;

    const handleShake = (e: DeviceMotionEvent) => {
      if (!e.accelerationIncludingGravity) return;
      
      const { x, y, z } = e.accelerationIncludingGravity;
      if (x === null || y === null || z === null) return;
      
      if (lastX && lastY && lastZ) {
        const deltaX = Math.abs(x - lastX);
        const deltaY = Math.abs(y - lastY);
        if (deltaX > threshold || deltaY > threshold) {
          // Monkey dance functionality would go here
          if (window.navigator.vibrate) {
            window.navigator.vibrate([200, 100, 200]);
          }
        }
      }
      lastX = x;
      lastY = y;
      lastZ = z;
    };

    window.addEventListener('devicemotion', handleShake);
    return () => window.removeEventListener('devicemotion', handleShake);
  }, []);
}