import { useState } from "react";

import { FC, ReactNode } from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";
import PageLoading from "./PageLoading";
// import { Toaster } from "react-hot-toast";

export interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  const [menuOn, setMenuOn] = useState(false);

  return (
    <div>
      <div
        className={
          "absolute w-full transition-all duration-700 ease-in-out z-50"
        }
      >
        <Navbar menuOn={menuOn} setMenuOn={setMenuOn} />
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
          (!menuOn
            ? "top-[var(--nav-height)] opacity-100"
            : "-top-full opacity-0 -z-10")
        }
      >
        {children}
      </div>

      {/* <Toaster /> */}
      <PageLoading />
    </div>
  );
};

export default Layout;
