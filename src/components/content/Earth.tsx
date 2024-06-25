"use client";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

const Earth = () => {
  // group
  const groupRef = useRef<THREE.Group>(null!);
  // earth
  const earthRef = useRef<THREE.Mesh>(null!);
  const earthTilt = new THREE.Euler(0, 0, 0.4091);
  const earthTexture = useLoader(THREE.TextureLoader, "./textures/earth.jpg");
  // earth clouds
  const cloudRef = useRef<THREE.Mesh>(null!);
  const cloudTexture = useLoader(
    THREE.TextureLoader,
    "./textures/earth-clouds.jpg"
  );

  useFrame((_, delta) => {
    earthRef.current.rotation.y += 0.1 * delta;
    cloudRef.current.rotation.y += 0.1 * delta;
  });

  return (
    <group
      rotation={earthTilt}
      position={[0, 0, 0]}
      onClick={() => console.log("earth")}
      onPointerOver={() => groupRef.current.scale.set(1.2, 1.2, 1.2)}
      onPointerLeave={() => groupRef.current.scale.set(1, 1, 1)}
      ref={groupRef}
    >
      <mesh scale={1} ref={earthRef}>
        <icosahedronGeometry args={[1, 12]} />
        <meshStandardMaterial map={earthTexture} />
      </mesh>
      <mesh scale={1.008} ref={cloudRef}>
        <icosahedronGeometry args={[1, 12]} />
        <meshStandardMaterial map={cloudTexture} transparent opacity={0.2} />
      </mesh>
    </group>
  );
};

export default Earth;
