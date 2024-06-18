import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Earth from "./Earth";

const Three = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-6xl pt-16">Earth</h1>
      <Canvas camera={{ fov: 75, near: 0.2, far: 100, position: [0, 0, 3] }}>
        <ambientLight intensity={0.1} castShadow />
        <directionalLight color="white" position={[-25, 0, 0]} castShadow />
        <Earth />
        <OrbitControls enableDamping enableZoom={true} />
        <axesHelper />
      </Canvas>
    </div>
  );
};

export default Three;
