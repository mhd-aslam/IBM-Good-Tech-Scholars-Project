import React from "react";
import trash from "../Maps/trash-bin.svg";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
const center = {
  lat: 10.054016519699735,
  lng: 76.6195291427202,
};
const CustomSkinMap = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={center}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }],
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }],
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }],
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }],
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }],
          },
        ],
      }}
    >
      <Marker position={{ lat: 10.06263, lng: 76.62067 }} />
      <Marker
        position={{
          lat: 10.052114616409956,
          lng: 76.60904346374795,
        }}
        icon={{
          url: trash,
          scaledSize: new window.google.maps.Size(40, 40),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(20, 20),
        }}
      />
      <Marker
        position={{
          lat: 10.059688676170516,
          lng: 76.61761067004964,
        }}
        icon={{
          url: trash,
          scaledSize: new window.google.maps.Size(40, 40),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(20, 20),
        }}
      />
      <Marker
        position={{
          lat: 10.0566799305576,
          lng: 76.6172113326288,
        }}
        icon={{
          url: trash,
          scaledSize: new window.google.maps.Size(40, 40),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(20, 20),
        }}
      />
      <Marker
        position={{
          lat: 10.053704491824897,
          lng: 76.61333482708505,
        }}
        icon={{
          url: trash,
          scaledSize: new window.google.maps.Size(40, 40),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(20, 20),
        }}
      />
      <Marker
        position={{
          lat: 10.063825847272332,
          lng: 76.62286438101755,
        }}
        icon={{
          url: trash,
          scaledSize: new window.google.maps.Size(40, 40),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(20, 20),
        }}
      />
      <Marker
        position={{
          lat: 10.063769443554637,
          lng: 76.61152192804481,
        }}
        icon={{
          url: trash,
          scaledSize: new window.google.maps.Size(40, 40),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(20, 20),
        }}
      />
      <Marker
        position={{
          lat: 10.085823664444812,
          lng: 76.6100679853016,
        }}
        icon={{
          url: trash,
          scaledSize: new window.google.maps.Size(40, 40),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(20, 20),
        }}
      />
      <Marker
        position={{
          lat: 10.02897949343635,
          lng: 76.62633705627015,
        }}
        icon={{
          url: trash,
          scaledSize: new window.google.maps.Size(40, 40),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(20, 20),
        }}
      />
      <Marker
        position={{
          lat: 10.01237248577149,
          lng: 76.68178946905732,
        }}
        icon={{
          url: trash,
          scaledSize: new window.google.maps.Size(40, 40),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(20, 20),
        }}
      />
      <Marker
        position={{
          lat: 10.047629010532852,
          lng: 76.63479421438119,
        }}
        icon={{
          url: trash,
          scaledSize: new window.google.maps.Size(40, 40),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(20, 20),
        }}
      />
    </GoogleMap>
  ))
);

function Maps({ ...props }) {
  return (
    <CustomSkinMap
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCHzYt_s3lUG_SNXxzKUHQodk9CsVA_uqc"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default Maps;
