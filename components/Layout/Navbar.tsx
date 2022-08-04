import NextLink from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 sticky inset-0">
      <NextLink href={"/"}>
        <a className="btn btn-ghost normal-case text-xl">Abstractigakis</a>
      </NextLink>
    </div>
  );
};

export default Navbar;
