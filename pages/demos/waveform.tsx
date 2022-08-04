import Waveform from "@components/demos/Waveform";
import { useState } from "react";

const WaveformPage = () => {
  return (
    <>
      <p className="absolute bottom-0 right-0 h-32 w-32 z-10 text-white">
        Using r3f to creat wave forms
      </p>
      <audio
        controls
        id="audio-el"
        src="/audio/fur_elise.mp3"
        // autoPlay
      />

      <div className="w-screen h-screen inset-0 absolute -z-10">
        <Waveform />
      </div>
    </>
  );
};

export default WaveformPage;
