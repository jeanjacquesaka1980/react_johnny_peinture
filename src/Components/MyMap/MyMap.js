import React from "react";

// import leaflet map
import L from "leaflet";
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Popup
} from "../../../node_modules/react-leaflet";
import "leaflet/dist/leaflet.css";

const MyMap = () => {
  let icon = L.icon({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
    iconSize: [38, 48]
  });

  return (
    <LeafletMap
      center={[49.7167, 0.3333]}
      zoom={12}
      maxZoom={17}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
    >
      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      <Marker
        icon={icon}
        title="Cliquez pour plus d'infos"
        position={[49.7167, 0.3333]}
      >
        <Popup>
          J'interviens sur une zone de 30km aux alentours de Froberville. Si
          vous êtes au delà de cette zone, contactez moi pour voir quelles sont
          les autres possibilités au 06.70.22.38.38 !
        </Popup>
      </Marker>
    </LeafletMap>
  );
};

export default MyMap;
