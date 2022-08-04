import Geolocation from "@components/demos/GeoLocation";

const GeolocationPage = () => {
  return (
    <>
      <p className="absolute bottom-0 right-0 h-32 w-32 z-10 text-amber-500">
        Click to zoom in on your current location
      </p>

      <div className="w-screen h-screen inset-0 absolute -z-10">
        <Geolocation />
      </div>
    </>
  );
};

export default GeolocationPage;
