"use client";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

export const Earth = () => {
  const cloudRef = useRef<THREE.Mesh>(null!);
  const earthRef = useRef<THREE.Mesh>(null!);
  const earthTilt = new THREE.Euler(0, 0, 0.4091);
  const earthTexture = useLoader(THREE.TextureLoader, "./textures/earth.jpg");

  useFrame((_, delta) => {
    earthRef.current.rotation.y += 0.1 * delta;
    cloudRef.current.rotation.y += 0.1 * delta;
  });

  return (
    <group rotation={earthTilt}>
      <mesh scale={1} ref={earthRef}>
        <icosahedronGeometry args={[1, 12]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>
      <mesh scale={1} ref={cloudRef}>
        <icosahedronGeometry args={[1, 12]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>
    </group>
  );
};
