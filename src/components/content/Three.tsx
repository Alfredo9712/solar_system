"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Three = () => {
  return (
    <div className="h-screen bg-slate-200">
      <Canvas camera={{ fov: 75, near: 0.2, far: 100, position: [0, 0, 3] }}>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <mesh scale={0.7}>
          <boxGeometry />
          <meshStandardMaterial wireframe />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Three;
