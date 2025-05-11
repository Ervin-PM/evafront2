import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -38.6000101,
  lng: -72.8473708,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCC9d4YvLPsUgMleIoyAaisfgnnzXFp-Gs">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;