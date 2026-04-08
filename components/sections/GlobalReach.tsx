"use client";

import { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import Subheading from "../Subheading";
import Heading from "../Heading";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false, loading: () => <div style={styles.mapLoading}>Loading Map...</div> }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const countryData: Record<string, { coords: [number, number]; flag: string }> = {
  Bangladesh: { coords: [23.685, 90.356], flag: "🇧🇩" },
  India: { coords: [20.5937, 78.9629], flag: "🇮🇳" },
  USA: { coords: [37.0902, -95.7129], flag: "🇺🇸" },
  Germany: { coords: [51.1657, 10.4515], flag: "🇩🇪" },
  UK: { coords: [55.3781, -3.436], flag: "🇬🇧" },
  Canada: { coords: [56.1304, -106.3468], flag: "🇨🇦" },
  Australia: { coords: [-25.2744, 133.7751], flag: "🇦🇺" },
  Japan: { coords: [36.2048, 138.2529], flag: "🇯🇵" },
  UAE: { coords: [23.4241, 53.8478], flag: "🇦🇪" },
  Singapore: { coords: [1.3521, 103.8198], flag: "🇸🇬" },
  France: { coords: [46.2276, 2.2137], flag: "🇫🇷" },
  Brazil: { coords: [-14.235, -51.9253], flag: "🇧🇷" },
  China: { coords: [35.8617, 104.1954], flag: "🇨🇳" },
  Italy: { coords: [41.8719, 12.5674], flag: "🇮🇹" },
};

interface GlobalReachProps {
  countries?: string[];
  pinColor?: "black" | "red";
}

export default function GlobalReach({ 
  countries = ["USA",  "India", "Japan", "UAE", "Singapore", "Australia"],
  pinColor = "black"
}: GlobalReachProps) {
  const [mounted, setMounted] = useState(false);
  const [L, setL] = useState<typeof import("leaflet") | null>(null);

  useEffect(() => {
    setMounted(true);
    import("leaflet").then((leaflet) => {
      setL(leaflet);
    });
  }, []);

  const createCustomIcon = useMemo(() => {
    if (!L) return null;
    
    const isBlack = pinColor === "black";
    const mainColor = isBlack ? "#1a1a1a" : "#7f1d1d";
    const highlightColor = isBlack ? "#333333" : "#991b1b";
    const ringColor = isBlack ? "0,0,0" : "127,29,29";
    
    return (name: string, flag: string) => L.divIcon({
      className: "uber-style-marker",
      html: `
        <div style="
          position: relative;
          width: 140px;
          height: 80px;
          margin-left: -70px;
          margin-top: -80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
        ">
          <!-- Country Label (Above Pin) -->
          <div style="
            background: white;
            border: 2px solid #1a1a1a;
            border-radius: 8px;
            padding: 6px 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            margin-bottom: 8px;
            white-space: nowrap;
            font-weight: 700;
            font-size: 12px;
            color: #1a1a1a;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            display: flex;
            align-items: center;
            gap: 6px;
            z-index: 1000;
          ">
            <span style="font-size: 14px;">${flag}</span>
            <span>${name}</span>
          </div>
          
          <!-- Pin Container -->
          <div style="
            position: relative;
            width: 40px;
            height: 44px;
          ">
            <!-- Radar Rings - Spreading from bottom of pin (ground level) -->
            <div style="
              position: absolute;
              width: 120px;
              height: 120px;
              left: 50%;
              bottom: -60px;
              transform: translateX(-50%);
              pointer-events: none;
              z-index: 1;
            ">
              <div style="
                position: absolute;
                width: 100%;
                height: 100%;
                border: 2px solid rgba(${ringColor}, 0.4);
                border-radius: 50%;
                animation: uber-spread 2.5s ease-out infinite;
                left: 0;
                top: 0;
              "></div>
              <div style="
                position: absolute;
                width: 100%;
                height: 100%;
                border: 2px solid rgba(${ringColor}, 0.3);
                border-radius: 50%;
                animation: uber-spread 2.5s ease-out infinite 0.8s;
                left: 0;
                top: 0;
              "></div>
              <div style="
                position: absolute;
                width: 100%;
                height: 100%;
                border: 2px solid rgba(${ringColor}, 0.2);
                border-radius: 50%;
                animation: uber-spread 2.5s ease-out infinite 1.6s;
                left: 0;
                top: 0;
              "></div>
            </div>
            
            <!-- The Pin -->
            <div style="
              position: relative;
              width: 36px;
              height: 44px;
              z-index: 10;
              filter: drop-shadow(0 4px 8px rgba(${ringColor}, 0.4));
            ">
              <div style="
                position: absolute;
                width: 36px;
                height: 36px;
                background: linear-gradient(135deg, ${highlightColor} 0%, ${mainColor} 50%, #000000 100%);
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                left: 2px;
                top: 2px;
                box-shadow: 
                  inset -2px -2px 4px rgba(0,0,0,0.3),
                  inset 2px 2px 4px rgba(255,255,255,0.1);
                border: 2px solid #ffffff;
              "></div>
              <div style="
                position: absolute;
                width: 10px;
                height: 10px;
                background: ${isBlack ? '#666' : '#fca5a5'};
                border-radius: 50%;
                left: 15px;
                top: 15px;
                box-shadow: inset 0 1px 2px rgba(0,0,0,0.5);
              "></div>
            </div>
          </div>
        </div>
      `,
      iconSize: [140, 80],
      iconAnchor: [70, 40],
    });
  }, [L, pinColor]);

  const markers = useMemo(() => {
    return countries
      .map((country) => {
        const data = countryData[country];
        if (!data) return null;
        return { 
          name: country, 
          coords: data.coords, 
          flag: data.flag 
        };
      })
      .filter(Boolean) as { 
        name: string; 
        coords: [number, number]; 
        flag: string;
      }[];
  }, [countries]);

  if (!mounted || !L || !createCustomIcon) {
    return (
      <div style={styles.container}>
        <div style={{marginBottom:"30px", marginTop:"120px", textAlign: "center"}}>
          <Subheading title={"Global Reach"} cls="text-20" aos="fade-right" />
        </div>
        <div style={{marginBottom:"30px", fontSize:"18px", textAlign: "center"}} className="section-headings">   
          <Heading title={"We have exposure in these international markets."} aos="fade-right" aosDelay="200" />
        </div>
        <div style={styles.mapLoading}>Loading Colorful Map...</div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={{marginBottom:"30px", marginTop:"120px", textAlign: "center"}}>
        <Subheading title={"Global Reach"} cls="text-20" aos="fade-right" />
      </div>

      <div style={{marginBottom:"30px", fontSize:"18px", textAlign: "center"}} className="section-headings">   
        <Heading title={"We have exposure in these international markets."} aos="fade-right" aosDelay="200" />
      </div>

      <div style={styles.mapWrapper}>
        <MapContainer
          center={[20, 0]}
          zoom={2}
          minZoom={2}
          scrollWheelZoom={false}
          style={styles.map}
          worldCopyJump={true}
        >
          <TileLayer
            attribution='&copy; OpenStreetMap contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {markers.map(({ name, coords, flag }, i) => (
            <Marker 
              key={`${name}-${i}`} 
              position={coords} 
              icon={createCustomIcon(name, flag)}
              interactive={false}
            />
          ))}
        </MapContainer>
      </div>

      <style>{`
        @keyframes uber-spread {
          0% {
            transform: scale(0.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
        
        .uber-style-marker {
          background: transparent !important;
          border: none !important;
        }
        
        .leaflet-marker-icon {
          background: transparent !important;
          border: none !important;
        }
      `}</style>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px 80px",
    backgroundColor: "#ffffff",
  },
  mapWrapper: {
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
    border: "2px solid #1a1a1a",
    marginTop: "40px",
  },
  map: {
    width: "100%",
    height: "600px",
    zIndex: 1,
  },
  mapLoading: {
    height: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f5f5f5",
    borderRadius: "16px",
    color: "#1a1a1a",
    fontSize: "14px",
    letterSpacing: "0.05em",
    border: "2px solid #e5e5e5",
  },
};