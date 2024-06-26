"use client";
import * as THREE from "three";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";

const Saturn = () => {
  // group
  const groupRef = useRef<THREE.Group>(null!);
  // Saturn
  const saturnRef = useRef<THREE.Mesh>(null!);
  //   const earthTilt = new THREE.Euler(0, 0, 0.4091);
  const saturnTexture = useLoader(THREE.TextureLoader, "./textures/saturn.jpg");
  // earth clouds
  const saturnRingsRef = useRef<THREE.Mesh>(null!);
  const saturnRingsTexture = useLoader(
    THREE.TextureLoader,
    "./textures/ring.gif"
  );

  saturnRingsTexture.rotation = 1.5;

  useFrame((_, delta) => {
    saturnRef.current.rotation.y += 0.1 * delta;
  });

  return (
    <group
      //   rotation={earthTilt}
      position={[55, 0, 0]}
      //   onClick={() => console.log("earth")}
      //   onPointerOver={() => groupRef.current.scale.set(1.1, 1.1, 1.1)}
      //   onPointerLeave={() => groupRef.current.scale.set(1, 1, 1)}
      ref={groupRef}
      scale={9.138}
    >
      <mesh ref={saturnRef}>
        <icosahedronGeometry args={[1, 12]} />
        <meshStandardMaterial map={saturnTexture} />
      </mesh>
      <mesh scale={1} ref={saturnRingsRef} rotation={[-1, 0, 0]}>
        <ringGeometry args={[1.2, 1.7, 30]} />
        <meshStandardMaterial
          side={2}
          map={saturnRingsTexture}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
};

export default Saturn;
