'use client';

import "@/styles/multicolumn.css";
import Image from "next/image";
import Subheading from "../Subheading";
import Heading from "../Heading";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import ServiceList from "@/data/services.json";
import CardService from "../CardService";
import { SectionProps } from "@/types/sectionProps";
import { GiWheat, GiSugarCane, GiChiliPepper, GiPlantRoots, GiCow } from "react-icons/gi";
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

const services = [
  {
    id: 1,
    slug: "international-trading",
    title: "International Trading",
    icon: LuGlobe,
    description:
      "Global sourcing and supply of agro commodities and food products across multiple international markets.",
  },
  {
    id: 2,
    slug: "tech-enabled-retail",
    title: "Tech-Enabled Retail",
    icon: LuStore,
    description:
      "Technology solutions designed to support and modernize traditional retail distribution networks.",
  },
  {
    id: 3,
    slug: "food-distribution",
    title: "Food Distribution",
    icon: LuTruck,
    description:
      "Distribution of food products through efficient supply chain and logistics networks.",
  },
];


const OurServices = ({ data }: { data: SectionProps }) => {
    const serviceList = ServiceList;
    if(serviceList.length == 0) return null;

    const {
        wrapperCls,
        container,
        backgroundImage,
        subheading,
        heading,
        button
    } = data || {};

    return (
        <div className={`multicolumn ${wrapperCls}`}>
            {backgroundImage &&
                <div className="media media-bg">
                    <Image
                        src={backgroundImage.src}
                        width={backgroundImage.width}
                        height={backgroundImage.height}
                        loading={backgroundImage.loading}
                        alt={backgroundImage.alt ? backgroundImage.alt : 'bg image'}
                    />
                </div>
            }

            <div className={container}>
                <div className="multicolumn-header section-headings">
                    {subheading && 
                        <Subheading 
                            title={subheading}
                            cls="text-20"
                            aos="fade-up"
                        />
                    }

                    {heading && 
                        <Heading 
                            title={heading}
                            cls="text-50"
                            aos="fade-up"
                        />
                    }
                </div>

                <div className="multicolumn-inner">
                    <div className="grid lg:grid-cols-3 lg:gap-1">
                        {services.map((service) => (
                            <div 
                                className="col-span-1 multi-col" 
                                data-aos="fade-up" 
                                key={`servicel-card-${service.id}`}
                            >
                                <CardService data={service} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* {button && 
                    <div className="section-headings text-center">
                        <div className="buttons" data-aos="fade-up">
                            {button.type == 'primary' &&
                                <PrimaryButton 
                                    label={button.label}
                                    href={button.href}
                                    ariaLabel={button.label}
                                />
                            }

                            {button.type == 'secondary' &&
                                <SecondaryButton 
                                    label={button.label}
                                    href={button.href}
                                    ariaLabel={button.label}
                                />
                            }
                        </div>
                    </div>
                } */}
            </div>
        </div>
    )
}

export default OurServices;