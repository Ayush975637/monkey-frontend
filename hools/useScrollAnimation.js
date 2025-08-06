// hooks/useScrollAnimation.js
import { useScroll } from 'framer-motion';
import { useThree } from '@react-three/fiber';

export function useScrollAnimation() {
  const { scrollYProgress } = useScroll();
  const { camera } = useThree();

  useFrame(() => {
    camera.position.z = 5 + scrollYProgress.get() * 10;
    camera.rotation.x = scrollYProgress.get() * Math.PI * 0.1;
  });
}