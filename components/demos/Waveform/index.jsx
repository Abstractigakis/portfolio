import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleToRadians } from "@utils/angles";
import Plane from "./Prefabs/Plane";

const Waveform = () => {
  // Animation
  const orbitControlsRef = useRef(null);

  let test, audioContext, audioElement, dataArray, analyser, source;

  const setupAudioContext = () => {
    audioContext = new window.AudioContext();
    audioElement = document.getElementById("audio-el");
    // @ts-ignore
    source = audioContext.createMediaElementSource(audioElement);
    analyser = audioContext.createAnalyser();
    source.connect(analyser);
    analyser.connect(audioContext.destination);
    analyser.fftSize = 1024;
    dataArray = new Uint8Array(analyser.frequencyBinCount);
  };

  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 120]} />
          <OrbitControls ref={orbitControlsRef} />
          <Plane rotation={[-angleToRadians(65), 0, 0]} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Waveform;
