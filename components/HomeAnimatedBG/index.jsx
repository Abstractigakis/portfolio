import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

const HomeAnimatedBG = () => {
  const orbitControlsRef = useRef(null);
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls ref={orbitControlsRef} target={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HomeAnimatedBG;
