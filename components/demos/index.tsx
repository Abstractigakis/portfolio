import NextLink from "next/link";
import NextImage from "next/image";

export interface ICardLink {
  title: string;
  url: string;
  imgsrc: string;
  description: string;
}

const threeDemos: ICardLink[] = [
  {
    title: "Geolocation",
    url: "/demos/geolocation",
    imgsrc: "/images/geolocation.png",
    description: "Animated User's geo-location",
  },
  {
    title: "Fibre Physics",
    url: "/demos/physics",
    imgsrc: "/images/physics.png",
    description: "React Cannon Physics basics",
  },
  {
    title: "Fibre Environment",
    url: "/demos/environment",
    imgsrc: "/images/environment.png",
    description: "React Three Fiber enviornment primitives",
  },
  {
    title: "WebGL Unity Demo",
    url: "/demos/FPS",
    imgsrc: "/images/fps.png",
    description: "POC for executing unity projects in the browser",
  },
  {
    title: "Audio Visualizer",
    url: "/demos/waveform",
    imgsrc: "/images/geolocation.png",
    description: "Rendering Audio waveforms",
  },
  {
    title: "Joey Karate",
    url: "/demos/gabagoo",
    imgsrc: "/images/gabagoo.png",
    description: "fbx to gltf files with blender",
  },
];

const webGames: ICardLink[] = [
  {
    title: "4Word",
    url: "https://4word.app",
    imgsrc: "/images/4word.png",
    description: "Wordle-esque game",
  },
];

const pythonAlgorithms: ICardLink[] = [
  {
    title: "Sudoku Solver",
    url: "https://github.com/Abstractigakis/sudoku-solver",
    imgsrc: "/images/sudoku.png",
    description: "Sudoku Solver AI with Backtracking and Heuristics",
  },
];

export interface ISection {
  title: string;
  cards: ICardLink[];
}

const sections = [
  { title: "Web Apps", cards: webGames },
  { title: "3d Programming Demos", cards: threeDemos },
  { title: "Python Algorithms", cards: pythonAlgorithms },
];

const Demos = () => {
  return (
    <>
      {sections.map((s, i) => (
        <>
          <h1 className="m-4 p-4 text-3xl mx-auto text-center">
            <div className="font-extrabold bg-gradient-to-r from-gs via-gm to-ge text-transparent bg-clip-text">
              {s.title}
            </div>
          </h1>
          <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {s.cards.map(({ title, url, imgsrc, description }: ICardLink) => (
              <div className="flex justify-center" key={title}>
                <div className="bg-bs m-2 rounded-lg shadow-xl">
                  <div className="grid grid-cols-3">
                    <NextImage
                      className="rounded-lg shadow-xl"
                      layout="fixed"
                      src={imgsrc}
                      width={110 * 1.3}
                      height={110 * 1.3}
                      alt={title}
                    />
                    <div className="m-3 ml-12 col-span-2">
                      <p>{description}</p>
                      <div className="flex justify-center ">
                        <div className="text-center rounded-xl m-2 p-2 bg-bs transition-all duration-700 ease-in-out hover:bg-bh hover:scale-110 hover:shadow-2xl">
                          <div className="font-extrabold text-xl bg-gradient-to-r from-gs via-gm to-ge text-transparent bg-clip-text">
                            <NextLink href={url}>
                              <a>{title.toLocaleUpperCase()}</a>
                            </NextLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
    </>
  );
};

export default Demos;
