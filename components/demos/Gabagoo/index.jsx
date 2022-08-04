import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Joey from "./Joey";

const Gabagoo = () => {
  return (
    <Canvas>
      <Suspense fallback={<p>loading...</p>}>
        <ambientLight intensity={0.3} />
        <Joey />
      </Suspense>
    </Canvas>
  );
};

export default Gabagoo;
