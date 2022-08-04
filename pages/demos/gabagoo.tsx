import Gabagoo from "@components/demos/Gabagoo";

const GabagooPage = () => {
  return (
    <>
      <p className="absolute bottom-0 right-0 h-32 w-32 z-10 text-white">
        Charchter Animations that can be made in blender
      </p>

      <div className="w-screen h-screen inset-0 absolute -z-10">
        <Gabagoo />
      </div>
    </>
  );
};

export default GabagooPage;
