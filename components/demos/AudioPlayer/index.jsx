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
  const R = 10;

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
              <button>back 30</button>
              {/* pause play */}
              <button className="flex items-center">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group w-8 h-8 m-2 flex-1 hover:cursor-pointer"
                  onClick={() => setIsPlaying((p) => !p)}
                >
                  <rect
                    className={
                      "transition-all duration-700 ease-in-out group-hover:fill-gm " +
                      (!isPlaying ? "fill-gs" : "fill-ge")
                    }
                    rx={10}
                    width={2 * R}
                    height={100 - 2 * R}
                    transform={
                      !isPlaying
                        ? `translate(${50 - 2 * R}, ${R})`
                        : `translate(${50 - 4 * R - R / 2}, ${
                            R / 2
                          }) scale(1, 1.1)`
                    }
                  />
                  <rect
                    className={
                      "transition-all duration-700 ease-in-out group-hover:fill-gm " +
                      (!isPlaying ? "fill-gs" : "fill-ge")
                    }
                    rx={10}
                    width={2 * R}
                    height={100 - 2 * R}
                    transform={
                      !isPlaying
                        ? `translate(${50 + 2 * R}, ${R})`
                        : `translate(${50 - 4 * R - R / 2}, ${2 * R}) rotate(${
                            -58 + 360
                          })`
                    }
                  />
                  <rect
                    className={
                      "transition-all duration-700 ease-in-out group-hover:fill-gm " +
                      (!isPlaying ? "fill-gs" : "fill-ge")
                    }
                    rx={10}
                    width={2 * R}
                    height={100 - 2 * R}
                    transform={
                      !isPlaying
                        ? `translate(${50 + 2 * R}, ${R})`
                        : `translate(${50 - 4 * R + R / 2}, ${
                            100 - R / 2
                          }) rotate(${-122 - 360})`
                    }
                  />
                </svg>
              </button>
              <button>forward 30</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
