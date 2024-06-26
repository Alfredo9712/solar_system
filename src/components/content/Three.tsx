import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Earth from "./Earth";
import Sun from "./Sun";
import Planet from "./Planet";
import Saturn from "./Saturn";

const Three = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Canvas
        camera={{ fov: 75, near: 0.1, far: 800, position: [-11, 2.5, 20] }}
      >
        <ambientLight intensity={0.3} />
        <Sun />
        <Planet
          name="Mercury"
          texture="./textures/mercury.jpg"
          position={[-5, 0, 0]}
          scale={0.383}
        />
        <Planet
          name="Venus"
          texture="./textures/venus.jpg"
          position={[0, 0, 0]}
          scale={0.949}
        />
        <Earth />
        <Planet
          name="Mars"
          texture="./textures/mars.jpg"
          position={[10, 0, 0]}
          scale={0.532}
        />
        <Planet
          name="Jupiter"
          texture="./textures/jupiter.jpg"
          position={[25, 0, 0]}
          scale={11.21}
        />
        <Saturn />
        <OrbitControls enableDamping enableZoom={true} />
      </Canvas>
    </div>
  );
};

export default Three;
