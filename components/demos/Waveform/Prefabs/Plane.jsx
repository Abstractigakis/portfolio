const Plane = (props) => {
  return (
    <mesh {...props}>
      <planeGeometry args={[64, 64, 64, 64]} />
      <meshStandardMaterial wireframe />
    </mesh>
  );
};

export default Plane;
