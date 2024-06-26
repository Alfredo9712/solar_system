"use client";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

type PlanetProps = {
  name: string;
  texture: string;
  position: [number, number, number];
  scale: number;
};

const Planet = ({ name, scale, texture, position }: PlanetProps) => {
  // earth
  const planetRef = useRef<THREE.Mesh>(null!);
  const planetTexture = useLoader(THREE.TextureLoader, texture);

  useFrame((_, delta) => {
    planetRef.current.rotation.y += 0.1 * delta;
  });

  return (
    <mesh scale={scale} ref={planetRef} position={position}>
      <icosahedronGeometry args={[1, 12]} />
      <meshStandardMaterial map={planetTexture} />
    </mesh>
  );
};

export default Planet;
