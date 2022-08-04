import Physics from "@components/demos/Physics";

const PhysicsPage = () => {
  return (
    <>
      <p className="absolute bottom-0 right-0 h-32 w-32 z-10 text-white">
        Gravity acting on objects in a scene
      </p>

      <div className="w-screen h-screen inset-0 absolute -z-10">
        <Physics />
      </div>
    </>
  );
};

export default PhysicsPage;
