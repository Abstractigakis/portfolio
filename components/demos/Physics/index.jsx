import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { Physics, Debug } from "@react-three/cannon";
import * as THREE from "three";
import { angleToRadians } from "@utils/angles";

import Floor from "./Prefabs/Floor";
import Ball from "./Prefabs/Ball";

import { Environment } from "@react-three/drei";

const GetTheBallRolling = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas shadows className="absolute inset-0">
        <Suspense fallback={null}>
          <Physics>
            <Debug color="black" scale={1.1}>
              <ambientLight args={["#ffffff", 0.25]} />
              <spotLight
                args={["#ffffff", 1.5, 7, angleToRadians(45), 0.4]}
                position={[-3, 1, 0]}
                castShadow
              />

              <Floor />
              <Ball />

              <Environment background>
                <mesh>
                  <sphereGeometry args={[50, 100, 100]} />
                  <meshBasicMaterial color="#ff0000" side={THREE.BackSide} />
                </mesh>
              </Environment>
            </Debug>
          </Physics>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GetTheBallRolling;
