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

// Only the requested locations
const locationData: Record<string, { coords: [number, number]; flag: string; displayName: string }> = {
  "Djibouti": { coords: [11.5721, 43.1456], flag: "🇩🇯", displayName: "Djibouti" },
  "Somalia": { coords: [2.0469, 45.3182], flag: "🇸🇴", displayName: "Somalia" },
  "Mombasa": { coords: [-4.0435, 39.6682], flag: "🇰🇪", displayName: "Mombasa, Kenya" },
  "Dar es Salaam": { coords: [-6.7924, 39.2083], flag: "🇹🇿", displayName: "Dar es Salaam, Tanzania" },
  "Durban": { coords: [-29.8587, 31.0218], flag: "🇿🇦", displayName: "Durban, South Africa" },
  "Douala": { coords: [4.0511, 9.7679], flag: "🇨🇲", displayName: "Douala, Cameroon" },
  "Cotonou": { coords: [6.3703, 2.3912], flag: "🇧🇯", displayName: "Cotonou, Benin" },
  "Lomé": { coords: [6.1725, 1.2314], flag: "🇹🇬", displayName: "Lomé, Togo" },
  "Abidjan": { coords: [5.3599, -4.0083], flag: "🇨🇮", displayName: "Abidjan, Ivory Coast" },
  "Gambia": { coords: [13.4432, -16.5779], flag: "🇬🇲", displayName: "Gambia" },
  "Algeria": { coords: [28.0339, 1.6596], flag: "🇩🇿", displayName: "Algeria" },
  "Vietnam": { coords: [14.0583, 108.2772], flag: "🇻🇳", displayName: "Vietnam" },
  "Sri Lanka": { coords: [7.8731, 80.7718], flag: "🇱🇰", displayName: "Sri Lanka" },
  "China": { coords: [35.8617, 104.1954], flag: "🇨🇳", displayName: "China" },
  "USA": { coords: [37.0902, -95.7129], flag: "🇺🇸", displayName: "USA" },
  "Russia": { coords: [61.524, 105.3188], flag: "🇷🇺", displayName: "Russia" },
  "Dubai": { coords: [25.2048, 55.2708], flag: "🇦🇪", displayName: "Dubai, UAE" },
  "Saudi Arabia": { coords: [23.8859, 45.0792], flag: "🇸🇦", displayName: "Saudi Arabia" },
  "Oman": { coords: [21.4735, 55.9754], flag: "🇴🇲", displayName: "Oman" },
  "Afghanistan": { coords: [33.9391, 67.71], flag: "🇦🇫", displayName: "Afghanistan" },
};

interface GlobalReachProps {
  locations?: string[];
  pinColor?: "black" | "red";
}

export default function GlobalReach({ 
  locations = [
    "Djibouti", "Somalia", "Mombasa", "Dar es Salaam", "Durban",
    "Douala", "Cotonou", "Lomé", "Abidjan", "Gambia",
    "Algeria", "Vietnam", "Sri Lanka", "China", "USA",
    "Russia", "Dubai", "Saudi Arabia", "Oman", "Afghanistan"
  ],
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
    
    return (displayName: string, flag: string) => L.divIcon({
      className: "uber-style-marker",
      html: `
        <div style="
          position: relative;
          width: 160px;
          height: 80px;
          margin-left: -80px;
          margin-top: -80px;
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
        ">
          <div style="
            background: white;
            border: 2px solid #1a1a1a;
            border-radius: 8px;
            padding: 6px 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            margin-bottom: 8px;
            white-space: nowrap;
            font-weight: 700;
            font-size: 11px;
            color: #1a1a1a;
            letter-spacing: 0.3px;
            display: flex;
            align-items: center;
            gap: 6px;
            z-index: 1000;
          ">
            <span style="font-size: 14px;">${flag}</span>
            <span>${displayName}</span>
          </div>
          
          <div style="
            position: relative;
            width: 40px;
            height: 44px;
          ">
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
      iconSize: [160, 80],
      iconAnchor: [80, 40],
    });
  }, [L, pinColor]);

  const markers = useMemo(() => {
    return locations
      .map((location) => {
        const data = locationData[location];
        if (!data) return null;
        return { 
          displayName: data.displayName, 
          coords: data.coords, 
          flag: data.flag 
        };
      })
      .filter(Boolean) as { 
        displayName: string; 
        coords: [number, number]; 
        flag: string;
      }[];
  }, [locations]);

  if (!mounted || !L || !createCustomIcon) {
    return (
      <div style={styles.container}>
        <div style={{marginBottom:"30px", marginTop:"120px", textAlign: "center"}}>
          <Subheading title={"Global Reach"} cls="text-20" aos="fade-right" />
        </div>
        <div style={{marginBottom:"30px", fontSize:"18px", textAlign: "center"}} className="section-headings">   
          <Heading title={"We have exposure in these international markets."} aos="fade-right" aosDelay="200" />
        </div>
        <div style={styles.mapLoading}>Loading Map...</div>
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
          center={[20, 20]}
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

          {markers.map(({ displayName, coords, flag }, i) => (
            <Marker 
              key={`${displayName}-${i}`} 
              position={coords} 
              icon={createCustomIcon(displayName, flag)}
              interactive={false}
            />
          ))}
        </MapContainer>
      </div>

      {/* Location Grid - Below the Map */}
      <div style={styles.gridContainer}>
        <div style={styles.gridTitle}>
          <span>📍 Our Global Footprint</span>
        </div>
        <div style={styles.grid}>
          {markers.map(({ displayName, flag }, i) => (
            <div key={i} style={styles.gridItem}>
              <span style={styles.gridFlag}>{flag}</span>
              <span style={styles.gridName}>{displayName}</span>
            </div>
          ))}
        </div>
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
  gridContainer: {
    marginTop: "40px",
    background: "#f8f8f8",
    borderRadius: "16px",
    padding: "24px",
    border: "1px solid #e5e5e5",
  },
  gridTitle: {
    fontSize: "14px",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "#666",
    marginBottom: "20px",
    textAlign: "center" as const,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "12px",
  },
  gridItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "white",
    padding: "10px 16px",
    borderRadius: "40px",
    border: "1px solid #eaeaea",
    transition: "all 0.2s ease",
    cursor: "default",
  },
  gridFlag: {
    fontSize: "20px",
  },
  gridName: {
    fontSize: "13px",
    fontWeight: "500",
    color: "#1a1a1a",
  },
};

// Add hover effect via a separate style tag or CSS module
const gridItemHover = `
  .grid-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    border-color: #1a1a1a;
  }
`;