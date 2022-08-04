import { useSphere } from "@react-three/cannon";
import { PerspectiveCamera, PointerLockControls } from "@react-three/drei";

const Ball = (props) => {
  const [ref] = useSphere(() => ({ mass: 1, position: [0, 5, 0], ...props }));
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <PointerLockControls />
      <mesh ref={ref}>
        <sphereGeometry />
      </mesh>
    </>
  );
};

export default Ball;
