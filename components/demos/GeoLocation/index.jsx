import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { Stars, OrbitControls } from "@react-three/drei";
import Earth from "./Earth";
import { useRef } from "react";
import useGeolocation from "./useGeolocation";

const GeoLocation = () => {
  const orbitControlsRef = useRef(null);
  const userLocation = useGeolocation();
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Stars
          radius={500}
          count={5000}
          factor={50}
          saturation={100}
          fade
          speed={4}
        />
        <pointLight position={[10, 5, 10]} />
        <Earth
          planeLocation={
            userLocation.status === "done"
              ? { ...userLocation }
              : { lat: 0, lon: 0 }
          }
        />
        <OrbitControls ref={orbitControlsRef} target={[0, 0, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default GeoLocation;
