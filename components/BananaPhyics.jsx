// components/BananaPhysics.jsx
import { Physics, usePlane, useSphere } from '@react-three/cannon';

function Bananas() {
  const [ref] = useSphere(() => ({
    mass: 1,
    position: [Math.random() - 0.5, 5, Math.random() - 0.5],
    args: [0.5],
    onCollide: () => playSound('/pop.mp3')
  }));

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  );
}

function PhysicsWorld() {
  return (
    <Physics gravity={[0, -9.81, 0]}>
      <Bananas />
      <Ground />
    </Physics>
  );
}