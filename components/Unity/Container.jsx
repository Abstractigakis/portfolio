import { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityContainer({
  loaderUrl,
  dataUrl,
  frameworkUrl,
  codeUrl,
  widthPercent,
}) {
  const { unityProvider } = useUnityContext({
    loaderUrl,
    dataUrl,
    frameworkUrl,
    codeUrl,
  });

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    !loading && (
      <Unity
        style={{ width: widthPercent || "100%", height: "auto" }}
        unityProvider={unityProvider}
      />
    )
  );
}

export default UnityContainer;
