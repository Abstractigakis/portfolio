import UnityContainer from "../Unity/Container";

const FPS = () => {
  return (
    <div className="absolute grid place-items-center w-screen h-screen inset-0">
      <UnityContainer
        loaderUrl="/FPS/build/builds.loader.js"
        dataUrl="/FPS/build/webgl.data"
        frameworkUrl="/FPS/build/build.framework.js"
        codeUrl="/FPS/build/build.wasm"
        widthPercent={"85%"}
      />
    </div>
  );
};

export default FPS;
