// components/MonkeyModel.jsx
import { useGLTF, OrbitControls } from '@react-three/drei';

export function MonkeyModel({ isDancing }: { isDancing: boolean }) {
  const { nodes } = useGLTF('/monkey.glb') as { nodes: { monkey?: { geometry?: unknown } } };
  
  return (
    <group>
      <OrbitControls enableZoom={false} autoRotate />
      <mesh 
        geometry={nodes.monkey?.geometry}
        rotation-y={isDancing ? Math.sin(Date.now() * 0.01) * 0.3 : 0}
      >
        <meshStandardMaterial 
          color="#FF9F1C" 
          roughness={0.2} 
          metalness={0.8}
        />
      </mesh>
    </group>
  );
}