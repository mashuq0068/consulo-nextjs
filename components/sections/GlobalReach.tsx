"use client";

import { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import Subheading from "../Subheading";
import Heading from "../Heading";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

// ✅ Accurate trade hubs / ports
const locationData: Record<string, { coords: [number, number]; flag: string; displayName: string }> = {
  "Vietnam": { coords: [10.8231, 106.6297], flag: "🇻🇳", displayName: "Ho Chi Minh City" },
  "Sri Lanka": { coords: [6.9271, 79.8612], flag: "🇱🇰", displayName: "Colombo" },
  "India": { coords: [19.0760, 72.8777], flag: "🇮🇳", displayName: "Mumbai" },
  "Ethiopia": { coords: [8.9806, 38.7578], flag: "🇪🇹", displayName: "Addis Ababa" },
  "Djibouti": { coords: [11.5721, 43.1456], flag: "🇩🇯", displayName: "Djibouti Port" },
  "Afghanistan": { coords: [34.5553, 69.2075], flag: "🇦🇫", displayName: "Kabul" },
  "Turkey": { coords: [41.0082, 28.9784], flag: "🇹🇷", displayName: "Istanbul" },
  "Somalia": { coords: [2.0469, 45.3182], flag: "🇸🇴", displayName: "Mogadishu Port" },
  "Somaliland": { coords: [9.5600, 44.0650], flag: "🏳️", displayName: "Berbera Port" },
  "Dubai": { coords: [25.0657, 55.1713], flag: "🇦🇪", displayName: "Jebel Ali Port" },
  "Russia": { coords: [59.9311, 30.3609], flag: "🇷🇺", displayName: "St. Petersburg" },
  "China": { coords: [31.2304, 121.4737], flag: "🇨🇳", displayName: "Shanghai" },
  "Ivory Coast": { coords: [5.3599, -4.0083], flag: "🇨🇮", displayName: "Abidjan Port" },
};

// ✅ Offset to prevent overlap
const locationOffsets: Record<string, [number, number]> = {
  "Djibouti": [0.8, 0.8],
  "Somalia": [-0.8, 0.5],
  "Somaliland": [0.6, -0.6],
  "Dubai": [0.5, 1.0],
};

export default function GlobalReach() {
  const [mounted, setMounted] = useState(false);
  const [L, setL] = useState<typeof import("leaflet") | null>(null);

  useEffect(() => {
    setMounted(true);
    import("leaflet").then((leaflet) => setL(leaflet));
  }, []);

  // ✅ Navy theme icon
const createCustomIcon = useMemo(() => {
  if (!L) return null;

  const mainColor = "#111038";
  const highlightColor = "#1c1a5a";
  const ringColor = "17,16,56";

  return (displayName: string, flag: string) =>
    L.divIcon({
      className: "custom-marker",
      html: `
      <div style="
        position: relative;
        width: 120px;
        height: 70px;
        margin-left: -60px;
        margin-top: -70px;
        display: flex;
        flex-direction: column;
        align-items: center;
      ">
        
        <!-- Label -->
        <div style="
          background: white;
          border: 1.5px solid ${mainColor};
          border-radius: 6px;
          padding: 4px 8px;
          font-size: 10px;
          font-weight: 600;
          color: ${mainColor};
          display: flex;
          gap: 5px;
          align-items: center;
          margin-bottom: 4px;
          white-space: nowrap;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        ">
          <span>${flag}</span>
          <span>${displayName}</span>
        </div>

        <!-- Pin Wrapper -->
        <div style="
          position: relative;
          width: 18px;
          height: 26px;
        ">

          <!-- Pulse ring -->
          <div style="
            position: absolute;
            width: 40px;
            height: 40px;
            left: 50%;
            bottom: -10px;
            transform: translateX(-50%);
            border: 2px solid rgba(${ringColor}, 0.25);
            border-radius: 50%;
            animation: pulse 2s infinite;
          "></div>

          <!-- Pin -->
          <div style="
            width: 18px;
            height: 18px;
            background: linear-gradient(135deg, ${highlightColor}, ${mainColor});
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            position: absolute;
            top: 0;
            left: 0;
            border: 1.5px solid #fff;
            box-shadow: 0 3px 6px rgba(${ringColor},0.4);
          "></div>

          <!-- Inner dot -->
          <div style="
            width: 6px;
            height: 6px;
            background: #fff;
            border-radius: 50%;
            position: absolute;
            top: 6px;
            left: 6px;
          "></div>

        </div>
      </div>
      `,
      iconSize: [120, 70],
      iconAnchor: [60, 35],
    });
}, [L]);

  const locations = [
    "Vietnam",
    "Sri Lanka",
    "India",
    "Ethiopia",
    "Djibouti",
    "Afghanistan",
    "Turkey",
    "Somalia",
    "Somaliland",
    "Dubai",
    "Russia",
    "China",
    "Ivory Coast",
  ];

  // ✅ Apply offset
  const markers = useMemo(() => {
    return locations.map((loc) => {
      const data = locationData[loc];
      const offset = locationOffsets[loc] || [0, 0];

      return {
        displayName: data.displayName,
        flag: data.flag,
        coords: [
          data.coords[0] + offset[0],
          data.coords[1] + offset[1],
        ] as [number, number],
      };
    });
  }, []);

  if (!mounted || !L || !createCustomIcon) return null;

  return (
    <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "80px 20px" }}>
      
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <Subheading title={"Our Global Network"} />
      </div>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <Heading title={"We have exposure in these international markets."} />
      </div>

      <div style={{
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 20px 60px rgba(0,0,0,0.1)"
      }}>
        <MapContainer
          center={[20, 60]}
          zoom={3}
          minZoom={2}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "600px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {markers.map((m, i) => (
            <Marker
              key={i}
              position={m.coords}
              icon={createCustomIcon(m.displayName, m.flag)}
            />
          ))}
        </MapContainer>
      </div>
    </div>
  );
}