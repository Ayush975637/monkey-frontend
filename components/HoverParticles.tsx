// components/HoverParticles.jsx
import { Particles } from '@react-three/drei';

function ParticleExplosion() {
  return (
    <Particles
      count={500}
      position={[0, 0, -2]}
      size={0.02}
      color="#FF9F1C"
      opacity={0.8}
      active={hovered}
      onClick={() => explode()}
    />
  );
}