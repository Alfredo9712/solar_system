import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Earth from "./Earth";
import Mars from "./Mars";
import Sun from "./Sun";

const Three = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Canvas camera={{ fov: 75, near: 1, far: 100, position: [15, 2, 3] }}>
        <ambientLight intensity={0.3} />
        <Sun />
        <Earth />
        <Mars />
        <OrbitControls enableDamping enableZoom={true} />
        <axesHelper />
      </Canvas>
    </div>
  );
};

export default Three;
