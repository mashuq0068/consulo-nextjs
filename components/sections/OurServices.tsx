"use client";

import "@/styles/multicolumn.css";
import Image from "next/image";
import Subheading from "../Subheading";
import Heading from "../Heading";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import ServiceList from "@/data/services.json";
import CardService from "../CardService";
import { SectionProps } from "@/types/sectionProps";
import {
  GiWheat,
  GiSugarCane,
  GiChiliPepper,
  GiPlantRoots,
  GiCow,
} from "react-icons/gi";
import { FaGlobe, FaSeedling, FaStore, FaTruck } from "react-icons/fa";

// const services = [
//   {
//     id: 1,
//     slug: "rice",
//     title: "Rice",
//     icon: FaSeedling,
//     image: "/img/service/s1.jpg",
//     content: "...",
//     description: "Premium quality rice sourcing and supply for international markets with reliable quality control.",
//     list: [
//       { title: "Basmati Rice" },
//       { title: "Non-Basmati Rice" },
//       { title: "Parboiled Rice" }
//     ],
//   },
//   {
//     id: 2,
//     slug: "wheat",
//     title: "Wheat",
//     icon: GiWheat,
//     image: "/img/service/s3.jpg",
//     content: "...",
//     description: "Quality wheat supply for international food processing and consumption markets.",
//     list: [
//       { title: "Milling Wheat" },
//       { title: "Durum Wheat" },
//       { title: "Feed Wheat" }
//     ],
//   },
//   {
//     id: 3,
//     slug: "sugar",
//     title: "Sugar",
//     icon: GiSugarCane,
//     image: "/img/service/s4.jpg",
//     content: "...",
//     description: "International sugar trading with ICUMSA standard compliance and quality certification.",
//     list: [
//       { title: "Raw Sugar" },
//       { title: "Refined Sugar" },
//       { title: "Brown Sugar" }
//     ],
//   },
//   {
//     id: 4,
//     slug: "spices",
//     title: "Spices",
//     icon: GiChiliPepper,
//     image: "/img/service/s5.jpg",
//     content: "...",
//     description: "Premium Indian spices export with Spice Board certification and quality assurance.",
//     list: [
//       { title: "Turmeric & Cumin" },
//       { title: "Chili & Pepper" },
//       { title: "Coriander & More" }
//     ],
//   },
//   {
//     id: 5,
//     slug: "pulses",
//     title: "Pulses",
//     icon: GiPlantRoots,
//     image: "/img/service/s6.jpg",
//     content: "...",
//     description: "Quality pulses supply including lentils, chickpeas, and various gram varieties.",
//     list: [
//       { title: "Lentils & Chickpeas" },
//       { title: "Green Gram" },
//       { title: "Black Gram" }
//     ],
//   },
//   {
//     id: 6,
//     slug: "animal-feeds",
//     title: "Animal Feeds",
//     icon: GiCow,
//     image: "/img/service/s7.jpg",
//     content: "...",
//     description: "Quality animal feed products including soybean meal and corn gluten meal.",
//     list: [
//       { title: "Soybean Meal" },
//       { title: "Corn Gluten Meal" },
//       { title: "Feed Ingredients" }
//     ],
//   },
// ];

import { LuGlobe, LuStore, LuTruck } from "react-icons/lu";
import Link from "next/link";
const services = [
  {
    id: 1,
    slug: "international-trading",
    title: "International Trading",
    image:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/73/88/74/2c/cb/v1_E11/E118GDIA.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=9f3e5fffe29649de8e0402dee7011bf1e725a8531dc7f496fb26c2a53be2393b",
    description:
      "Global sourcing and supply of agro commodities and food products across multiple international markets.",
  },
  {
    id: 2,
    slug: "tech-enabled-retail",
    title: "Tech-Enabled Retail",
    image:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/d1/58/bd/c9/db/v1_E11/E114FIMB.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=2604d466972fc87cbc8c8b549c37f83272ccd75ffd1145e9235d7005780e6cb9",
    description:
      "Technology solutions designed to support and modernize traditional retail distribution networks.",
  },
  {
    id: 3,
    slug: "food-distribution",
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
