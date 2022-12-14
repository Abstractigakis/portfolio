/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Akshat (https://sketchfab.com/shooter24994)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/earth-41fc80d85dfd480281f21b74b2de2faa
title: Earth
*/

import { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";
import Plane from "./Plane";

export default function Model({ ...props }) {
  const [isZoom, setIsZoom] = useState(false);

  const { lat, lon } = props.planeLocation;
  const latRot = (lat * Math.PI) / 180;
  const lonRot = (-lon * Math.PI) / 180 - Math.PI / 2;

  const { scale, planeLocation, rotation } = useSpring({
    scale: isZoom ? 2 * 0.02 : 1 * 0.02,
    planeLocation: isZoom ? [0, 0, 4.4] : [0, 0, 2.4],
    rotation: [latRot, lonRot, 0],
    config: config.molasses,
  });

  const group = useRef();
  const { nodes, materials } = useGLTF("/models/Earth/scene.gltf");

  return (
    <>
      <animated.group
        ref={group}
        {...props}
        dispose={null}
        scale={scale}
        onClick={() => setIsZoom((prev) => !prev)}
        rotation={rotation}
      >
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
              <mesh
                geometry={nodes.Sphere_Material002_0.geometry}
                material={materials["Material.002"]}
              />
            </group>
          </group>
        </group>
      </animated.group>
      <animated.group rotation={[Math.PI / 2, 0, 0]} position={planeLocation}>
        <Plane scale={0.1} />
      </animated.group>
    </>
  );
}

useGLTF.preload("/models/Earth/scene.gltf");
