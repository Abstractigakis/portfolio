import NextLink from "next/link";

import { FC } from "react";
// import { Toaster } from "react-hot-toast";

export interface INavbarProps {
  menuOn: boolean;
  setMenuOn: Function;
}

const Navbar: FC<INavbarProps> = ({ menuOn, setMenuOn }) => {
  const R = 16;
  return (
    <nav className="flex items-center justify-between flex-wrap bg-bs">
      <div className="flex items-center">
        <NextLink href={"/"}>
          <div
            className="flex hover:cursor-pointer"
            onClick={() => setMenuOn(false)}
          >
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
          <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="group w-8 h-8 m-2 flex-1 hover:cursor-pointer"
            onClick={() => setMenuOn((p: boolean) => !p)}
          >
            <rect
              className={
                "transition-all duration-700 ease-in-out " +
                (menuOn ? "fill-gs group-hover:fill-gm" : "opacity-0")
              }
              width={2 * R}
              height={200}
              x={-R}
              transform="rotate(-45)"
            />
            <rect
              className={
                "transition-all duration-700 ease-in-out " +
                (menuOn ? "fill-gs group-hover:fill-gm" : "opacity-0")
              }
              width={2 * R}
              height={200}
              x={-R}
              transform="translate(100) rotate(45)"
            />
            {/* Center Circle */}
            <circle
              className={
                " transition-all duration-700 ease-in-out " +
                (menuOn
                  ? "fill-gs group-hover:fill-gm"
                  : "fill-ge group-hover:fill-gm")
              }
              cx={50}
              cy={50}
              r={R}
            />
            {/* Corners Clockwise */}
            <circle
              className={
                "fill-ge group-hover:fill-gm transition-all duration-700 ease-in-out " +
                (menuOn ? "opacity-0" : "opacity-100")
              }
              cx={menuOn ? 50 : R}
              cy={menuOn ? 50 : R}
              r={R}
            />
            <circle
              className={
                "fill-ge group-hover:fill-gm transition-all duration-700 ease-in-out " +
                (menuOn ? "opacity-0" : "opacity-100")
              }
              cx={menuOn ? 50 : 100 - R}
              cy={menuOn ? 50 : R}
              r={R}
            />
            <circle
              className={
                "fill-ge group-hover:fill-gm transition-all duration-700 ease-in-out " +
                (menuOn ? "opacity-0" : "opacity-100")
              }
              cx={menuOn ? 50 : 100 - R}
              cy={menuOn ? 50 : 100 - R}
              r={R}
            />
            <circle
              className={
                "fill-ge group-hover:fill-gm transition-all duration-700 ease-in-out " +
                (menuOn ? "opacity-0" : "opacity-100")
              }
              cx={menuOn ? 50 : R}
              cy={menuOn ? 50 : 100 - R}
              r={R}
            />

            {/* edges Clockwise */}
            <circle
              className={
                " transition-all duration-700 ease-in-out " +
                (menuOn
                  ? "fill-gs group-hover:fill-gm"
                  : "fill-ge group-hover:fill-gm")
              }
              cx={menuOn ? 100 - R : 50}
              cy={R}
              r={R}
            />
            <circle
              className={
                " transition-all duration-700 ease-in-out " +
                (menuOn
                  ? "fill-gs group-hover:fill-gm"
                  : "fill-ge group-hover:fill-gm")
              }
              cx={menuOn ? R : 50}
              cy={100 - R}
              r={R}
            />
            <circle
              className={
                " transition-all duration-700 ease-in-out " +
                (menuOn
                  ? "fill-gs group-hover:fill-gm"
                  : "fill-ge group-hover:fill-gm")
              }
              cx={100 - R}
              cy={menuOn ? 100 - R : 50}
              r={R}
            />
            <circle
              className={
                " transition-all duration-700 ease-in-out " +
                (menuOn
                  ? "fill-gs group-hover:fill-gm"
                  : "fill-ge group-hover:fill-gm")
              }
              cx={R}
              cy={menuOn ? R : 50}
              r={R}
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
