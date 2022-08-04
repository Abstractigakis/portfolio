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
  { title: "WebGL Unity Project", url: "/demos/FPS" },
];

const DemosPage: NextPage = () => {
  return (
    <>
      {demos.map(({ title, url }: ICardLink) => (
        <div className="m-2">
          <NextLink href={url}>
            <a className="btn btn-ghost normal-case">{title}</a>
          </NextLink>
        </div>
      ))}
    </>
  );
};

export default DemosPage;
