import NextLink from "next/link";
import NextImage from "next/image";

export interface ICardLink {
  title: string;
  url: string;
  imgsrc: string;
  description: string;
  tags: string[];
}

const threeDemos: ICardLink[] = [
  {
    title: "Geolocation",
    url: "/demos/geolocation",
    imgsrc: "/images/geolocation.png",
    description: "Animated User's geo-location",
    tags: ["threejs", "webGL", "r3f", "3dprogramming", "APIs", "geolocation"],
  },
  {
    title: "Fibre Physics",
    url: "/demos/physics",
    imgsrc: "/images/physics.png",
    description: "React Cannon Physics basics",
    tags: ["threejs", "webGL", "r3f", "3dprogramming", "physics"],
  },
  {
    title: "Fibre Environment",
    url: "/demos/environment",
    imgsrc: "/images/environment.png",
    description: "React Three Fiber enviornment primitives",
    tags: ["threejs", "webGL", "r3f", "3dprogramming"],
  },
  {
    title: "WebGL Unity Demo",
    url: "/demos/FPS",
    imgsrc: "/images/fps.png",
    description: "POC for executing unity projects in the browser",
    tags: ["C#", "webGL", "3dprogramming", "WASM"],
  },
  {
    title: "Audio Visualizer",
    url: "/demos/waveform",
    imgsrc: "/images/geolocation.png",
    description: "Rendering Audio waveforms",
    tags: ["threejs", "webGL", "r3f", "3dprogramming", "physics"],
  },
  {
    title: "Joey Karate",
    url: "/demos/gabagoo",
    imgsrc: "/images/gabagoo.png",
    description: "fbx to gltf files with blender",
    tags: ["threejs", "webGL", "r3f", "blender"],
  },
];

const webGames: ICardLink[] = [
  {
    title: "4Word",
    url: "https://4word.app",
    imgsrc: "/images/4word.png",
    description: "Wordle-esque game",
    tags: [
      "TypeScript",
      "aws",
      "tailwindcss",
      "OAuth",
      "aurora",
      "postgressql",
      "stripe",
    ],
  },
];

const pythonAlgorithms: ICardLink[] = [
  {
    title: "Sudoku Solver",
    url: "https://github.com/Abstractigakis/sudoku-solver",
    imgsrc: "/images/sudoku.png",
    description: "Sudoku Solver AI with Backtracking and Heuristics",
    tags: ["python", "algorithms", "ai", "math"],
  },
  {
    title: "Fourword Intelligence",
    url: "https://github.com/Abstractigakis/fourword.ai",
    imgsrc: "/images/4word.png",
    description: "https://4word.app puzzle difficulty classifier",
    tags: ["python", "algorithms", "ai", "math", "dynamicprogramming"],
  },
  {
    title: "Variable Elimination Algorithm",
    url: "https://github.com/Abstractigakis/variable-elimination-algorithm",
    imgsrc: "/images/git.png",
    description:
      "simple and general exact inference algorithm in probabilistic graphical models",
    tags: [
      "python",
      "bayseianstatistics",
      "ai",
      "math",
      "markovdescisionprocess",
    ],
  },
  {
    title: "Google FooBar Coding Challenge",
    url: "https://github.com/Abstractigakis/bringing-a-gun-to-a-trainer-fight",
    imgsrc: "/images/git.png",
    description: "My solution to my favourite google foo bar problem",
    tags: ["python", "symetry", "math"],
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
          <h1 key={i} className="m-4 p-4 text-3xl mx-auto text-center">
            <div className="font-extrabold bg-gradient-to-r from-gs via-gm to-ge text-transparent bg-clip-text">
              {s.title}
            </div>
          </h1>
          <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {s.cards.map(
              ({ title, url, imgsrc, description, tags }: ICardLink) => (
                <div className="flex justify-center " key={title}>
                  <div className="p-2 bg-bs max-w-sm rounded overflow-hidden shadow-lg">
                    <NextImage
                      className="rounded"
                      width={1920}
                      height={1080}
                      src={imgsrc}
                      alt={title}
                    />
                    <div className="px-6 py-4">
                      <div className="text-center rounded-xl m-2 p-2 bg-bh transition-all duration-700 ease-in-out hover:bg-txt hover:scale-110 hover:shadow-2xl">
                        <div className="font-extrabold text-xl bg-gradient-to-r from-gs via-gm to-ge text-transparent bg-clip-text">
                          <NextLink href={url}>
                            <a>{title.toLocaleUpperCase()}</a>
                          </NextLink>
                        </div>
                      </div>
                      <p className="m-2">{description}</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      {tags.map((t) => (
                        <span className="inline-block bg-txt rounded-full px-3 py-1 text-sm font-semibold text-bs mr-2 mb-2">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </>
      ))}
    </>
  );
};

export default Demos;
