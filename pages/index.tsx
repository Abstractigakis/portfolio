import NextLink from "next/link";

const HomePage = () => {
  return (
    <div className="flex">
      <div
        className="
      m-2 p-2 rounded-xl
      transition-all ease-in-out 
      hover:bg-blue-500"
      >
        <h1
          className="
        font-extrabold 
        bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-transparent bg-clip-text"
        >
          <NextLink href={"/demos"}>
            <a>demos</a>
          </NextLink>
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
