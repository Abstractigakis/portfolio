import NextLink from "next/link";

const HomePage = () => {
  return (
    <div className="absolute">
      <NextLink href={"/demos"}>
        <a>demos</a>
      </NextLink>
    </div>
  );
};

export default HomePage;
