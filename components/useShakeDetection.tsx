// hooks/useShakeDetection.js
export function useShakeDetection() {
  useEffect(() => {
    const threshold = 15;
    let lastX, lastY, lastZ;

    const handleShake = (e) => {
      const { x, y, z } = e.accelerationIncludingGravity;
      if (lastX && lastY && lastZ) {
        const deltaX = Math.abs(x - lastX);
        const deltaY = Math.abs(y - lastY);
        if (deltaX > threshold || deltaY > threshold) {
          startMonkeyDance();
          window.navigator.vibrate([200, 100, 200]);
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