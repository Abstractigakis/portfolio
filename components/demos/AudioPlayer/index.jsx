import { useState } from "react";

const AudioPlayer = () => {
  // https://www.iconfinder.com/iconsets/video-player-5
  const songsData = [
    {
      title: "Fur Elise",
      src: "/audio/fur_elise.mp3",
    },
    {
      title: "School of Rock",
      src: "/audio/school_of_rock.mp3",
    },
    {
      title: "Nightmare",
      src: "/audio/nightmare.mp3",
    },
  ];

  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={"w-screen h-[calc(100vh-var(--nav-height))]"}>
      <audio src="/audio/school_of_rock.mp3"></audio>
      <div className="grid place-items-center">
        <div className="m-2 p-2 bg-bs rounded">
          <div className="flex">
            <div className="mx-2">0:00</div>
            <div>
              <input type="range" />
            </div>
            <div className="mx-2">4:30</div>
          </div>

          <div className="grid place-items-center">
            <div className="flex">
              {/* Volume */}

              {/* Backward 30s */}

              {/* pause play */}

              {/* Forward 30s */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
