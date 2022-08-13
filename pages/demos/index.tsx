import type { NextPage } from "next";
import NextLink from "next/link";
import NextImage from "next/image";

export interface ICardLink {
  title: string;
  url: string;
  imgsrc: string;
  description: string;
}

const demos: ICardLink[] = [
  {
    title: "Geolocation",
    url: "/demos/geolocation",
    imgsrc: "/images/geolocation.png",
    description:
      "POC for showing the user's geo-location data on the earth with React spring and React Three Fiber",
  },
  {
    title: "Fibre Physics",
    url: "/demos/physics",
    imgsrc: "/images/physics.png",
    description: "Learning the basics of React Cannon Physics",
  },
  {
    title: "Fibre Environment",
    url: "/demos/environment",
    imgsrc: "/images/environment.png",
    description: "POC for learning React Three Fiber enviornment primitives",
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
    description:
      "Extracting the real time frequency data from an audio HTML5 element that is playing an mp3 file, and rendering the data with a React Three FibreMesh",
  },
  {
    title: "Joey Karate",
    url: "/demos/gabagoo",
    imgsrc: "/images/gabagoo.png",
    description:
      "POC for Charchter Animations fbx files, processed to gltf files in blender",
  },
];

const DemosPage: NextPage = () => {
  return (
    <>
      <h1 className="m-4 p-4 text-3xl mx-auto text-center">
        3d Programming Demos in the browser
      </h1>
      <div className="mx-auto">
        <div className="">
          {demos.map(({ title, url, imgsrc, description }: ICardLink) => (
            <div className="m-2 flex justify-center" key={title}>
              <div className="w-96 bg-base-100 shadow-xl image-full">
                <figure>
                  <NextImage
                    src={imgsrc}
                    width={110 * 1.3}
                    height={100 * 1.3}
                    alt={title}
                  />
                </figure>
                <div className="">
                  <h2 className="">{title}</h2>
                  <p>{description}</p>
                  <div className="justify-end">
                    <div className="flex">
                      <div className="rounded-xl m-2 p-2 bg-bs transition-all duration-700 ease-in-out hover:bg-bh hover:translate-x-2 hover:shadow-2xl">
                        <div className="font-extrabold text-xl bg-gradient-to-r from-gs via-gm to-ge text-transparent bg-clip-text">
                          <NextLink href={url}>
                            <a className="">View</a>
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
      </div>
    </>
  );
};

export default DemosPage;
