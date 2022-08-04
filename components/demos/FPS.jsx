import UnityContainer from "../Unity/Container";

const FPS = () => {
  return (
    <UnityContainer
      loaderUrl="/FPS/build/FPS/builds.loader.js"
      dataUrl="/FPS/build/webgl.data"
      frameworkUrl="/FPS/build/build.framework.js"
      codeUrl="/FPS/build/build.wasm"
      widthPercent={"85%"}
    />
  );
};

export default FPS;
