import { useState } from "react";

import { FC, ReactNode } from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";
// import { Toaster } from "react-hot-toast";

export interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  const [menuOn, setMenuOn] = useState(!false);

  return (
    <div>
      <div
        className={
          "absolute w-full transition-all duration-700 ease-in-out " +
          (!menuOn ? "top-0 opacity-100" : "-top-full opacity-0 -z-10")
        }
      >
        <Navbar setMenuOn={setMenuOn} />
      </div>

      <div
        className={
          "absolute w-full transition-all duration-700 ease-in-out  " +
          (menuOn ? "top-0 opacity-100" : "-top-full opacity-0")
        }
      >
        <Menu setMenuOn={setMenuOn} />
      </div>

      {/* Page */}
      <div
        className={
          "absolute w-full transition-all duration-700 ease-in-out " +
          (!menuOn ? "top-16 opacity-100" : "-top-full opacity-0 -z-10")
        }
      >
        {children}
      </div>
      {/* <Toaster /> */}
    </div>
  );
};

export default Layout;
