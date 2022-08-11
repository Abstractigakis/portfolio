import NextLink from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between bg-bs">
        <NextLink href={"/"}>
          <div className="flex hover:cursor-pointer">
            <div className="rounded-xl m-2 p-2 transition-all duration-700 ease-in-out hover:bg-bh hover:translate-x-2 hover:shadow-2xl">
              <div className="font-extrabold text-3xl bg-gradient-to-bl from-gs via-gm to-ge text-transparent bg-clip-text">
                ABSTRACTIGAKIS
              </div>
            </div>
          </div>
        </NextLink>
        <div className="flex hover:cursor-pointer">
          <div className="rounded-xl m-2 p-2 transition-all duration-700 ease-in-out hover:bg-bh hover:-translate-x-2 hover:shadow-2xl">
            <div className="font-extrabold text-3xl bg-gradient-to-bl from-gs via-gm to-ge text-transparent bg-clip-text">
              MENU
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
