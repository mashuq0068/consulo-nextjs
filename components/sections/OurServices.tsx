"use client";

import "@/styles/multicolumn.css";
import Image from "next/image";
import Subheading from "../Subheading";
import Heading from "../Heading";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import ServiceList from "@/data/services.json";
import { SectionProps } from "@/types/sectionProps";
import {
  GiWheat,
  GiSugarCane,
  GiChiliPepper,
  GiPlantRoots,
  GiCow,
} from "react-icons/gi";
import { FaGlobe, FaSeedling, FaStore, FaTruck } from "react-icons/fa";
import { ServiceDataType } from "@/types/service";
import { LuGlobe, LuStore, LuTruck } from "react-icons/lu";



import Link from "next/link";
import { useRef } from "react";

// v-1
const CardService = ({ data }: ServiceDataType) => {
  const { title, description, image, slug } = data || {};
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`;
    card.style.boxShadow = `20px 28px 60px var(--color-shadow), 0 2px 8px var(--color-shadow)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(900px) rotateX(4deg) rotateY(-6deg) scale3d(1,1,1)`;
    card.style.boxShadow = `20px 28px 60px var(--color-shadow), 0 2px 8px var(--color-shadow)`;
  };

  return (
    <Link href={`${slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          background: "var(--color-background)",
          borderRadius: "16px",
          // height:'500px',
          overflow: "hidden",
          transform: "perspective(900px) rotateX(4deg) rotateY(-6deg)",
          transition: "transform 0.15s ease, box-shadow 0.3s ease",
          boxShadow: "20px 28px 60px var(--color-shadow), 0 2px 8px var(--color-shadow)",
          cursor: "pointer",
          willChange: "transform",
          position: "relative",
          border: "1px solid var(--color-border)",
        }}
      >
        {/* Accent bar — uses your primary color */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "var(--color-primary)",
          zIndex: 2,
        }} />

        {/* Image */}
        {image && (
          <div style={{
            width: "100%",
            height: "260px",
            overflow: "hidden",
            position: "relative",
          }}>
            <img
              src={image}
              alt={title || "service"}
              width={400}
              height={400}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.5s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
              }}
            />
            {/* Gradient fade image into card bg */}
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "80px",
              background: "linear-gradient(to top, var(--color-background), transparent)",
            }} />
          </div>
        )}

        {/* Content */}
        <div style={{
          padding: "20px 28px 28px",
          position: "relative",
        }}>
          {/* Arrow badge — branded */}
          <div style={{
            position: "absolute",
            top: "-20px",
            right: "24px",
            width: "44px",
            height: "44px",
            background: "var(--color-primary-background)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 14px var(--color-shadow)",
          }}>
            <span style={{
              color: "var(--color-primary-button-text)",
              fontSize: "16px",
              fontWeight: "700",
            }}>→</span>
          </div>

          {title && (
            <h2
              className="heading text-28"
              style={{
                marginBottom: "10px",
                marginTop: "4px",
                color: "var(--color-foreground-heading)",
              }}
            >
              {title}
            </h2>
          )}

          {description && (
            <div
              className="text text-16"
              style={{
                lineHeight: "1.65",
                color: "var(--color-foreground-subheading)",
              }}
            >
              {description}
            </div>
          )}

          {/* CTA */}
          <div style={{
            marginTop: "18px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "var(--color-primary)",
            fontSize: "13px",
            fontWeight: "600",
            letterSpacing: "0.3px",
            opacity: 0.85,
          }}>
            Learn more
            <span style={{ fontSize: "16px", lineHeight: "1" }}>→</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

// v-2


// const CardService = ({ data }: ServiceDataType) => {
//   const { title, description, image, slug } = data || {};
//   const imgRef = useRef<HTMLImageElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const img = imgRef.current;
//     if (!img) return;
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const centerX = rect.width / 2;
//     const centerY = rect.height / 2;
//     const rotateX = ((y - centerY) / centerY) * -12;
//     const rotateY = ((x - centerX) / centerX) * 14;
//     img.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.07,1.07,1.07)`;
//     img.style.boxShadow = `${rotateY * -2}px ${rotateX * 2}px 40px var(--color-shadow)`;
//   };

//   const handleMouseLeave = () => {
//     const img = imgRef.current;
//     if (!img) return;
//     img.style.transform = `perspective(700px) rotateX(4deg) rotateY(-8deg) scale3d(1,1,1)`;
//     img.style.boxShadow = `18px 18px 40px var(--color-shadow)`;
//   };

//   return (
//     <Link href={`${slug}`} style={{ textDecoration: "none", display: "block" }}>
//       <div
//         style={{
//           background: "var(--color-background)",
//           borderRadius: "16px",
//           overflow: "visible",        /* visible so 3d image shadow spills out */
//           border: "1px solid var(--color-border)",
//           cursor: "pointer",
//           transition: "border-color 0.3s ease",
//           padding: "0",
//         }}
//         onMouseEnter={e => {
//           (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border-hover)";
//         }}
//         onMouseLeave={e => {
//           (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border)";
//           handleMouseLeave();
//         }}
//       >
//         {/* 3D Image Container */}
//         {image && (
//           <div
//             ref={containerRef}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             style={{
//               width: "100%",
//               height: "260px",
//               overflow: "visible",
//               position: "relative",
//               borderRadius: "14px 14px 0 0",
//               padding: "16px 16px 0 16px",
//               background: "var(--color-background-subheading)",  /* subtle tinted bg makes 3d pop */
//             }}
//           >
//             <img
//               ref={imgRef}
//               src={image}
//               alt={title || "service"}
//               width={400}
//               height={400}
//               style={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 display: "block",
//                 borderRadius: "10px 10px 0 0",
//                 transform: "perspective(700px) rotateX(4deg) rotateY(-8deg) scale3d(1,1,1)",
//                 transition: "transform 0.2s ease, box-shadow 0.2s ease",
//                 boxShadow: "18px 18px 40px var(--color-shadow)",
//                 willChange: "transform",
//               }}
//             />
//           </div>
//         )}

//         {/* Flat clean content below */}
//         <div style={{
//           padding: "24px 28px 28px",
//           borderTop: "1px solid var(--color-border)",
//           marginTop: "0",
//         }}>
//           {/* Subheading pill */}
//           <div style={{
//             display: "inline-flex",
//             alignItems: "center",
//             gap: "6px",
//             background: "var(--color-background-subheading)",
//             border: "1px solid var(--color-border)",
//             borderRadius: "40px",
//             padding: "3px 12px",
//             marginBottom: "12px",
//           }}>
//             <span style={{
//               width: "6px",
//               height: "6px",
//               borderRadius: "50%",
//               background: "var(--color-primary)",
//               display: "inline-block",
//             }} />
//             <span style={{
//               fontSize: "11px",
//               fontWeight: "600",
//               color: "var(--color-foreground-subheading)",
//               letterSpacing: "0.8px",
//               textTransform: "uppercase",
//             }}>
//               Business Area
//             </span>
//           </div>

//           {title && (
//             <h2
//               className="heading text-28"
//               style={{
//                 marginBottom: "10px",
//                 marginTop: "0",
//                 color: "var(--color-foreground-heading)",
//               }}
//             >
//               {title}
//             </h2>
//           )}

//           {description && (
//             <div
//               className="text text-16"
//               style={{
//                 lineHeight: "1.65",
//                 color: "var(--color-foreground-subheading)",
//               }}
//             >
//               {description}
//             </div>
//           )}

//           {/* CTA */}
//           <div style={{
//             marginTop: "20px",
//             display: "inline-flex",
//             alignItems: "center",
//             gap: "8px",
//             color: "var(--color-primary)",
//             fontSize: "13px",
//             fontWeight: "700",
//             letterSpacing: "0.4px",
//             borderBottom: "1.5px solid var(--color-primary)",
//             paddingBottom: "2px",
//             transition: "opacity 0.2s",
//           }}>
//             Explore more
//             <span style={{ fontSize: "15px" }}>→</span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };


const services = [
  {
    id: 1,
    slug: "/services",
    title: "International Trading",
    image:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/73/88/74/2c/cb/v1_E11/E118GDIA.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=9f3e5fffe29649de8e0402dee7011bf1e725a8531dc7f496fb26c2a53be2393b",
    description:
      "Global sourcing and supply of agro commodities and food products across multiple international markets.",
  },
  {
    id: 2,
    slug: "/services",
    title: "Tech-Enabled Retail",
    image:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/d1/58/bd/c9/db/v1_E11/E114FIMB.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=2604d466972fc87cbc8c8b549c37f83272ccd75ffd1145e9235d7005780e6cb9",
    description:
      "Technology solutions designed to support and modernize traditional retail distribution networks.",
  },
  {
    id: 3,
    slug: "/services",
    title: "Food Distribution",
    image:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/c0/03/5b/a5/e4/v1_E10/E10ANLNW.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=b2c85ce784531ad18f2143728073f2246c55ebabc89b4fcd66ef2a1a243a2549",
    description:
      "Distribution of food products through efficient supply chain and logistics networks.",
  },
];

const OurServices = ({ data }: { data: SectionProps }) => {
  const serviceList = ServiceList;
  if (serviceList.length == 0) return null;

  const {
    wrapperCls,
    container,
    backgroundImage,
    subheading,
    heading,
    button,
  } = data || {};

  return (
    <div className={`multicolumn ${wrapperCls}`}>
      <div className={container}>
        <div className="multicolumn-header section-headings">
          {subheading && (
            <Subheading title={subheading} cls="text-20" aos="fade-up" />
          )}

          {heading && <Heading title={heading} cls="text-50" aos="fade-up" />}
        </div>

        <div className="multicolumn-inner">
          <div className="grid lg:grid-cols-3 lg:gap-1">
            {services.map((service, i) => (
              <Link href="/services" key={i}>
                <div
                  className="col-span-1 multi-col"
                  data-aos="fade-up"
                  key={`servicel-card-${service.id}`}
                >
                  <CardService data={service} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
