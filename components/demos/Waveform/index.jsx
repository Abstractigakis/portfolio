import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleToRadians } from "@utils/angles";
import Plane from "./Prefabs/Plane";

const Waveform = () => {
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

  const play = async () => {
    if (!audioContext) {
      setupAudioContext();
      console.log({
        test,
        audioContext,
        audioElement,
        dataArray,
        analyser,
        source,
      });
    }
  };

  return (
    <div className="absolute inset-0 w-screen h-screen">
      <audio
        className="absolute z-10 inset-20 m-4"
        id="audio-el"
        src="/audio/fur_elise.mp3"
        controls
        // autoPlay
        onPlay={play}
      />
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 120]} />
          <OrbitControls ref={orbitControlsRef} />
          <Plane rotation={[-angleToRadians(65), 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Waveform;
