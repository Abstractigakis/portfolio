import NextLink from "next/link";
import { FC } from "react";

export interface IMenuLinks {
  link: string;
  title: string;
}

const menuLinks: IMenuLinks[] = [
  { link: "/", title: "Home" },
  { link: "/demos", title: "Demos" },
  { link: "/blog", title: "Blog" },
];
export interface IMenuProps {
  setMenuOn: Function;
}

const Menu: FC<IMenuProps> = ({ setMenuOn }) => {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="bg-slate-900 m-2 p-2">
          <div className="flex justify-end pb-4">
            <button onClick={() => setMenuOn(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 rounded-full p-1 fill-red-500 transition-all duration-700 ease-in-out hover:bg-bh hover:fill-red-700 hover:-translate-x-1 hover:shadow-2xl"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <div className="grid place-items-center">
            {menuLinks.map((ml) => (
              <div className="flex">
                <div className="rounded-xl m-2 p-2 bg-bs transition-all duration-700 ease-in-out hover:bg-bh hover:translate-x-2 hover:shadow-2xl">
                  <div className="font-extrabold text-xl bg-gradient-to-r from-gs via-gm to-ge text-transparent bg-clip-text">
                    <NextLink href={ml.link}>
                      <a>{ml.title}</a>
                    </NextLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
