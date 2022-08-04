import type { NextPage } from "next";
import NextLink from "next/link";

export interface ICardLink {
  title: string;
  url: string;
}

const demos: ICardLink[] = [
  { title: "Geolocation", url: "/demos/geolocation" },
  { title: "Fibre Physics", url: "/demos/physics" },
  { title: "Fibre Environment", url: "/demos/environment" },
  { title: "WebGL Unity Demo", url: "/demos/FPS" },
  { title: "WaveForm Redering", url: "/demos/waveform" },
  { title: "Character Animation From Blender + Mixamo", url: "/demos/gabagoo" },
];

const DemosPage: NextPage = () => {
  return (
    <div className="absolute">
      {demos.map(({ title, url }: ICardLink) => (
        <div className="m-2" key={title}>
          <NextLink href={url}>
            <a className="btn btn-ghost normal-case">{title}</a>
          </NextLink>
        </div>
      ))}
    </div>
  );
};

export default DemosPage;
