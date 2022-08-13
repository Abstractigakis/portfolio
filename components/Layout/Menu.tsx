import NextLink from "next/link";
import { FC } from "react";

export interface IMenuLinks {
  link: string;
  title: string;
}

const menuLinks: IMenuLinks[] = [
  { link: "/demos", title: "demos" },
  { link: "/blog", title: "blog" },
];
export interface IMenuProps {
  menuOn: boolean;
  setMenuOn: Function;
}

const Menu: FC<IMenuProps> = ({ menuOn, setMenuOn }) => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="">
        <button
          className="hover:cursor-pointer"
          onClick={() => setMenuOn(false)}
        >
          X
        </button>
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
  );
};

export default Menu;
