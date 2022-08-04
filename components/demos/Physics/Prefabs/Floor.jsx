import { usePlane } from "@react-three/cannon";

const Floor = (props) => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#1ea3d8" />
    </mesh>
  );
};

export default Floor;
