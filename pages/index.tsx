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
      "POC for using rect spring with react 3 fiber, and integrating it with real user geo location data",
  },
  {
    title: "Fibre Physics",
    url: "/demos/physics",
    imgsrc: "/images/physics.png",
    description: "testing out react 3 fiber gravity physics",
  },
  {
    title: "Fibre Environment",
    url: "/demos/environment",
    imgsrc: "/images/environment.png",
    description: "POC for learning react 3 fiber lighting",
  },
  {
    title: "WebGL Unity Demo",
    url: "/demos/FPS",
    imgsrc: "/images/fps.png",
    description: "POC for running unity projects in the browser",
  },
  {
    title: "Audio Visualizer",
    url: "/demos/waveform",
    imgsrc: "/images/geolocation.png",
    description:
      "POC displaying frequency data of mp3 files htat are played with html5 audio elements",
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
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {demos.map(({ title, url, imgsrc, description }: ICardLink) => (
            <div className="m-2 flex justify-center" key={title}>
              <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure>
                  <NextImage
                    src={imgsrc}
                    width={110 * 1.3}
                    height={100 * 1.3}
                    alt={title}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{title}</h2>
                  <p>{description}</p>
                  <div className="card-actions justify-end">
                    <NextLink href={url}>
                      <a className="btn btn-primary normal-case">View</a>
                    </NextLink>
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
