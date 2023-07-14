import React, { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L, { map } from "leaflet";

const Map = ({ lat, lng }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    let marker = null;
    if (mapRef.current) {
      // If the map instance exists, update the view with new coordinates
      mapRef.current.setView([lat, lng], 13);

      // Remove previous marker, if exists
      if (marker) {
        marker.removeFrom(mapRef.current);
      }
    } else {
      // Create the map if it hasn't been initialized yet
      mapRef.current = L.map("map").setView([lat, lng], 13);

      // Add a tile layer to the map
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "Map data &copy; OpenStreetMap contributors",
      }).addTo(mapRef.current);
    }
    // Create a custom icon for the arrow marker
    const arrowIcon = L.icon({
      iconUrl: "/images/icon-location.svg",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });

    // Add the arrow marker to the map
    marker = L.marker([lat, lng], { icon: arrowIcon }).addTo(mapRef.current);
    marker.bindPopup(`<b> Here are you coordinates</b> <br /> ${[lat, lng]}`);
  }, [lat, lng]);

  return (
    <div className="h-[71.28vh] relative z-0">
      <div id="map" className="w-full h-full"></div>;
    </div>
  );
};

export default Map;
