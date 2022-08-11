import Navbar from "./Navbar";
import { FC, ReactNode } from "react";
// import { Toaster } from "react-hot-toast";

export interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="h-screen bg-bg text-txt">
      <Navbar />
      {children}
      {/* <Toaster /> */}
    </div>
  );
};

export default Layout;
