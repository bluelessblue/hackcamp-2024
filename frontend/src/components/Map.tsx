import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("leaflet"), { ssr: false });

interface MapComponentProps {
    coordinates: CoordinatesType[]; // Array of coordinates, each being a tuple
}

export default function MapComponent({ coordinates }: any) {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        if (mapContainerRef.current && coordinates.length > 0) {
            let L = require("leaflet");
            let map = L.map(mapContainerRef.current);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);

            // Create markers and add to the map
            coordinates.forEach((coord) =>
                L.marker(coord)
                    .bindPopup("ubccc it😂.")
                    .addTo(map)
                    .openPopup()
            );

            const bounds = L.latLngBounds(coordinates);
            map.fitBounds(bounds);
        }
    }, [coordinates]);

    return <div id="map" ref={mapContainerRef} style={{ height: "500px", width: "800px" }} />;
}
