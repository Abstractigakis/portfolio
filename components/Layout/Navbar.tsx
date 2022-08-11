import NextLink from "next/link";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="p-2 m-2 rounded-xl text-3xl hover:bg-bgHover transition-all ease-in-out duration-300">
          <NextLink href={"/"}>
            <a>Abstractigakis</a>
          </NextLink>
        </div>
        <div className="p-2 m-2 rounded-xl hover:bg-bgHover transition-all ease-in-out duration-300">
          <HiMenu size={36} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
