"use client";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

const Mars = () => {
  // earth
  const marsRef = useRef<THREE.Mesh>(null!);

  const earthTexture = useLoader(THREE.TextureLoader, "./textures/mars.jpg");

  useFrame((_, delta) => {
    marsRef.current.rotation.y += 0.1 * delta;
  });

  return (
    <mesh scale={1} ref={marsRef} position={[10, 0, 0]}>
      <icosahedronGeometry args={[1, 12]} />
      <meshStandardMaterial map={earthTexture} />
    </mesh>
  );
};

export default Mars;
