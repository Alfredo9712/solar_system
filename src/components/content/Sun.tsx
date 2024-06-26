"use client";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

const Sun = () => {
  // sun
  const sunRef = useRef<THREE.Mesh>(null!);
  const sunTexture = useLoader(THREE.TextureLoader, "./textures/sun.jpg");

  useFrame((_, delta) => {
    sunRef.current.rotation.y += 0.1 * delta;
  });

  return (
    <mesh ref={sunRef} position={[-120, 0, 0]} scale={109.3}>
      <icosahedronGeometry args={[1, 30]} />
      <meshStandardMaterial
        map={sunTexture}
        color={"white"}
        emissive={"yellow"}
        emissiveIntensity={0.2}
      />
      <pointLight intensity={50000} distance={50000} />
    </mesh>
  );
};

export default Sun;
