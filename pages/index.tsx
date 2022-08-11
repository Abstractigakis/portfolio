import NextLink from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="flex">
        <div className="rounded-xl m-2 p-2 bg-bs transition-all duration-700 ease-in-out hover:bg-bh hover:translate-x-2 hover:shadow-2xl">
          <div className="font-extrabold text-lg bg-gradient-to-r from-gs via-gm to-ge text-transparent bg-clip-text">
            <NextLink href={"/demos"}>
              <a>demos</a>
            </NextLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
