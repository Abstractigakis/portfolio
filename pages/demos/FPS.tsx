import FPS from "@components/demos/FPS";

const FPSPage = () => {
  return (
    <>
      <p className="absolute bottom-0 right-0 h-32 w-32 z-10 text-white">
        POC for running unity projects in the browser
      </p>

      <div className="grid place-items-center w-screen h-screen inset-0 absolute -z-10">
        <FPS />
      </div>
    </>
  );
};

export default FPSPage;
