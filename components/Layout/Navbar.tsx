import NextLink from "next/link";

import { FC } from "react";
// import { Toaster } from "react-hot-toast";

export interface INavbarProps {
  setMenuOn: Function;
}

const Navbar: FC<INavbarProps> = ({ setMenuOn }) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-bs">
      <div className="flex items-center">
        <NextLink href={"/"}>
          <div className="flex hover:cursor-pointer">
            <div className="rounded-xl m-2 p-2 transition-all duration-700 ease-in-out hover:bg-bh hover:translate-x-2 hover:shadow-2xl">
              <div className="font-extrabold text-xl bg-gradient-to-r from-gs via-gm to-ge text-transparent bg-clip-text">
                ABSTRACTIGAKIS
              </div>
            </div>
          </div>
        </NextLink>
      </div>
      <div className="block">
        <button className="flex items-center">
          <div className="flex-1 hover:cursor-pointer">
            <div className="rounded-xl m-2 p-2 transition-all duration-700 ease-in-out hover:bg-bh hover:-translate-x-2 hover:shadow-2xl">
              <div
                className="font-extrabold text-xl bg-gradient-to-l from-gs via-gm to-ge text-transparent bg-clip-text"
                onClick={() => setMenuOn((p: boolean) => !p)}
              >
                MENU
              </div>
            </div>
          </div>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
