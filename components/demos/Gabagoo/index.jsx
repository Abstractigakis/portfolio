import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Joey from "./Joey";

const Gabagoo = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <Joey />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Gabagoo;
