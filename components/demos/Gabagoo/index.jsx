import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import Joey from "./Joey";

const Gabagoo = () => {
  const orbitControlsRef = useRef(null);

  return (
    <Canvas>
      <Suspense fallback={null}>
        <OrbitControls ref={orbitControlsRef} />
        <ambientLight intensity={0.3} />
        <Joey />
      </Suspense>
    </Canvas>
  );
};

export default Gabagoo;
