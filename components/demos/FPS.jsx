import UnityContainer from "../Unity/Container";

const FPS = () => {
  return (
    <div className={"w-screen h-[calc(100vh-var(--nav-height))]"}>
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
