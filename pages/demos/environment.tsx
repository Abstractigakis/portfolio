import Environment from "@components/demos/Environment";

const EnvironmentPage = () => {
  return (
    <>
      <p className="absolute bottom-0 right-0 h-32 w-32 z-10 text-white">
        Getting strated with react 3 fiber lighting
      </p>

      <div className="w-screen h-screen inset-0 absolute -z-10">
        <Environment />
      </div>
    </>
  );
};

export default EnvironmentPage;
