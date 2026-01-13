
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Define constants for intrinsic elements to fix JSX TypeScript errors
const Group = 'group' as any;
const Mesh = 'mesh' as any;
const IcosahedronGeometry = 'icosahedronGeometry' as any;
const MeshBasicMaterial = 'meshBasicMaterial' as any;
const TorusGeometry = 'torusGeometry' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;

const ForgeCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
    if (outerRef.current) {
      outerRef.current.rotation.y = -state.clock.getElapsedTime() * 0.1;
      outerRef.current.rotation.z = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Group>
      {/* Inner Glowing Core */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={meshRef} args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#0ea5e9"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
            emissive="#38bdf8"
            emissiveIntensity={0.5}
          />
        </Sphere>
      </Float>

      {/* Outer Wireframe Shell */}
      <Mesh ref={outerRef}>
        <IcosahedronGeometry args={[2, 2]} />
        <MeshBasicMaterial color="#6366f1" wireframe transparent opacity={0.15} />
      </Mesh>

      {/* Decorative Rings */}
      <Mesh rotation={[Math.PI / 2, 0, 0]}>
        <TorusGeometry args={[3, 0.02, 16, 100]} />
        <MeshBasicMaterial color="#0ea5e9" transparent opacity={0.2} />
      </Mesh>
    </Group>
  );
};

const Scene3D: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-60">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
        <AmbientLight intensity={0.5} />
        <PointLight position={[10, 10, 10]} color="#0ea5e9" intensity={2} />
        <PointLight position={[-10, -10, -10]} color="#6366f1" intensity={1} />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <ForgeCore />
      </Canvas>
    </div>
  );
};

export default Scene3D;
