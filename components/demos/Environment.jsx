import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useRef } from "react";
import { angleToRadians } from "@utils/angles";
import * as THREE from "three";

const EnvironmentExample = () => {
  // Animation
  const orbitControlsRef = useRef(null);
  const ballRef = useRef(null);

  return (
    <div className={"w-screen h-[calc(100vh-var(--nav-height))]"}>
      <Canvas shadows>
        <Suspense fallback={null}>
          <OrbitControls
            ref={orbitControlsRef}
            minPolarAngle={angleToRadians(60)}
            maxPolarAngle={angleToRadians(80)}
          />

          <PerspectiveCamera makeDefault position={[0, 1, 5]} />
          <mesh position={[0, 0.5, 0]} castShadow ref={ballRef}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial
              color="#ffffff"
              metalness={0.6}
              roughness={0.2}
            />
          </mesh>

          {/* Floor */}
          <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial color="#1ea3d8" />
          </mesh>

          {/* Ambient light */}
          <ambientLight args={["#ffffff", 0.25]} />

          {/* Spotlight light */}
          <spotLight
            args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]}
            position={[-3, 1, 0]}
            castShadow
          />

          {/* Environmnet */}
          <Environment background>
            <mesh>
              <sphereGeometry args={[50, 100, 100]} />
              <meshBasicMaterial color="#ff0000" side={THREE.BackSide} />
            </mesh>
          </Environment>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default EnvironmentExample;
