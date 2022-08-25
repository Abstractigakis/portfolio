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
              {/* Volume */}

              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
                  />
                </svg>
              </button>

              {/* Backward 30s */}
              <button>
                <svg viewBox="0 0 528.916 528.916" className="w-8 h-8 group">
                  <path
                    className="transition-all duration-700 ease-in-out fill-ge group-hover:fill-gm"
                    d="M70.846,324.059c3.21,3.926,8.409,3.926,11.619,0l69.162-84.621c3.21-3.926,1.698-7.108-3.372-7.108h-36.723
                    c-5.07,0-8.516-4.061-7.427-9.012c18.883-85.995,95.625-150.564,187.207-150.564c105.708,0,191.706,85.999,191.706,191.706
                    c0,105.709-85.998,191.707-191.706,191.707c-12.674,0-22.95,10.275-22.95,22.949s10.276,22.949,22.95,22.949
                    c131.018,0,237.606-106.588,237.606-237.605c0-131.017-106.589-237.605-237.606-237.605
                    c-116.961,0-214.395,84.967-233.961,196.409c-0.878,4.994-5.52,9.067-10.59,9.067H5.057c-5.071,0-6.579,3.182-3.373,7.108
                    L70.846,324.059z"
                  />
                  <text
                    className="transition-all duration-700 ease-in-out fill-ge group-hover:fill-gm text-[150px] font-extrabold text-center"
                    x={180}
                    y={320}
                  >
                    -30
                  </text>
                </svg>
              </button>

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
              {/* Forward 30s */}
              <button>
                <svg viewBox="0 0 528.916 528.916" className="w-8 h-8 group">
                  <path
                    className="transition-all duration-700 ease-in-out fill-ge group-hover:fill-gm"
                    d="M523.859,232.329h-41.701c-5.07,0-9.715-4.073-10.59-9.067c-19.57-111.442-117-196.409-233.962-196.409
			C106.589,26.853,0,133.441,0,264.458c0,131.018,106.589,237.605,237.606,237.605c12.675,0,22.95-10.275,22.95-22.949
			s-10.275-22.949-22.95-22.949c-105.708,0-191.706-85.998-191.706-191.707c0-105.707,85.995-191.706,191.703-191.706
			c91.583,0,168.325,64.569,187.208,150.564c1.086,4.951-2.359,9.012-7.426,9.012H380.66c-5.07,0-6.578,3.182-3.371,7.108
			l69.162,84.621c3.209,3.926,8.408,3.926,11.619,0l69.162-84.621C530.439,235.511,528.928,232.329,523.859,232.329z"
                  />
                  <text
                    className="transition-all duration-700 ease-in-out fill-ge group-hover:fill-gm text-[150px] font-extrabold text-center"
                    x={70}
                    y={320}
                  >
                    +30
                  </text>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
