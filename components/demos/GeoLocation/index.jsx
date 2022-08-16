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
    <div className={"w-screen h-[calc(100vh-var(--nav-height))]"}>
      <p className="absolute bottom-0 right-0 h-32 w-32 z-10 text-amber-500">
        Click to zoom in on your current location
      </p>

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
    </div>
  );
};

export default GeoLocation;
