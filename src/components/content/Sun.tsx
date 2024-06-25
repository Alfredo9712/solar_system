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
    <mesh ref={sunRef} position={[-20, 0, 0]} scale={10}>
      <icosahedronGeometry args={[1, 12]} />
      <meshStandardMaterial
        map={sunTexture}
        color={"white"}
        emissive={"yellow"}
        emissiveIntensity={0.6}
      />
      <pointLight
        intensity={800}
        distance={900}
        // decay={2} // Adjust decay for more natural light falloff
      />
    </mesh>
  );
};

export default Sun;
