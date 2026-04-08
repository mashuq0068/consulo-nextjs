"use client";

import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import parser from "html-react-parser";

interface GlobalReachMapProps {
  countries: string[];
}

const countryCoords: Record<string, [number, number]> = {
  Bangladesh: [23.685, 90.356],
  India: [20.5937, 78.9629],
  USA: [37.0902, -95.7129],
  Germany: [51.1657, 10.4515],
  UK: [55.3781, -3.436],
  Canada: [56.1304, -106.3468],
  Australia: [-25.2744, 133.7751],
  Japan: [36.2048, 138.2529],
  UAE: [23.4241, 53.8478],
};

export default function GlobalReachMap({ countries }: GlobalReachMapProps) {
  const markers = countries
    ?.map((c) => {
      const coords = countryCoords[c];
      if (!coords) return null;
      return { name: c, coords };
    })
    .filter(Boolean) as { name: string; coords: [number, number] }[];

  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      scrollWheelZoom={false}
      style={{
        width: "100%",
        height: "500px",
        borderRadius: "12px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {markers.map(({ name, coords }, i) => {
        const icon = L.divIcon({
          html: `<div style="
            width:14px;
            height:14px;
            border-radius:50%;
            background:#d62828;
            border:2px solid white;
            position: relative;
            animation:bounce 1.6s infinite;
          "></div>`,
          className: "",
          iconSize: [18, 18],
          iconAnchor: [9, 9],
        });

        return (
          <Marker key={i} position={coords} icon={icon}>
            <Tooltip direction="top" offset={[0, -10]} opacity={1} sticky>
              {parser(name)}
            </Tooltip>
          </Marker>
        );
      })}
      <style>{`
        @keyframes bounce {
          0% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
          50% { transform: translateY(0); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </MapContainer>
  );
}