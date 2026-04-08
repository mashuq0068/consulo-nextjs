// import "@/styles/multicolumn.css";
import { ServiceSectionType } from "@/types/serviceSection";
import ServiceList from "@/data/services.json";
import CardService from "../CardService";
import NotFoundMsg from "../NotFoundMsg";

import { GiRice, GiWheat, GiSugarCane, GiSpices, GiBeanstalk, GiFeeding } from "react-icons/gi";

const services = [
  {
    id: 1,
    slug: "rice",
    title: "Rice",
    icon: GiRice,
    image: "/img/service/s1.jpg",
    content: "Kirti Bhavya Enterprises sources and supplies premium quality rice varieties from trusted suppliers across major rice-producing regions. Our rice products meet international quality standards and are available in various grades suitable for different market requirements. We ensure proper quality checks, packaging, and documentation for seamless export operations. Our rice offerings include Basmati, Non-Basmati, Parboiled, and specialty varieties tailored to destination market preferences.",
    description: "Premium quality rice sourcing and supply for international markets with reliable quality control.",
    list: ["Basmati Rice", "Non-Basmati Rice", "Parboiled Rice"],
  },
  {
    id: 2,
    slug: "wheat",
    title: "Wheat",
    icon: GiWheat,
    image: "/img/service/s3.jpg",
    content: "We supply high-quality wheat varieties suitable for various food processing and consumption needs. Our wheat products are sourced from reliable agricultural regions with strict quality monitoring throughout the supply chain. From milling wheat to durum varieties, we provide comprehensive wheat trading solutions with proper documentation and logistics coordination for international shipments.",
    description: "Quality wheat supply for international food processing and consumption markets.",
    list: ["Milling Wheat", "Durum Wheat", "Feed Wheat"],
  },
  {
    id: 3,
    slug: "sugar",
    title: "Sugar",
    icon: GiSugarCane,
    image: "/img/service/s4.jpg",
    content: "Kirti Bhavya Enterprises trades in various grades of sugar including raw sugar, refined sugar, and specialty sugar products. We ensure compliance with ICUMSA standards and international trade regulations. Our sugar trading operations include proper quality certification, packaging as per buyer specifications, and efficient logistics management for timely delivery.",
    description: "International sugar trading with ICUMSA standard compliance and quality certification.",
    list: ["Raw Sugar", "Refined Sugar", "Brown Sugar"],
  },
  {
    id: 4,
    slug: "spices",
    title: "Spices",
    icon: GiSpices,
    image: "/img/service/s5.jpg",
    content: "We export a wide range of premium Indian spices including turmeric, cumin, coriander, chili, and pepper. All our spices are sourced from certified farms and undergo rigorous quality testing. Our spice exports comply with Spice Board of India standards and international food safety regulations. We offer customized packaging and private labeling options.",
    description: "Premium Indian spices export with Spice Board certification and quality assurance.",
    list: ["Turmeric & Cumin", "Chili & Pepper", "Coriander & More"],
  },
  {
    id: 5,
    slug: "pulses",
    title: "Pulses",
    icon: GiBeanstalk,
    image: "/img/service/s6.jpg",
    content: "Kirti Bhavya Enterprises supplies various pulses including lentils, chickpeas, green gram, and black gram. Our pulses are sourced from quality-certified suppliers and processed in FSSAI-approved facilities. We offer pulses in various forms - whole, split, and processed - to meet diverse market requirements. Our quality control ensures consistent product standards.",
    description: "Quality pulses supply including lentils, chickpeas, and various gram varieties.",
    list: ["Lentils & Chickpeas", "Green Gram", "Black Gram"],
  },
  {
    id: 6,
    slug: "animal-feeds",
    title: "Animal Feeds",
    icon: GiFeeding,
    image: "/img/service/s7.jpg",
    content: "We supply high-quality animal feed products including soybean meal, corn gluten meal, and other feed ingredients. Our animal feed products meet international quality and safety standards. With reliable sourcing networks and efficient logistics, we ensure timely delivery of animal feed products to meet the growing demand in international markets.",
    description: "Quality animal feed products including soybean meal and corn gluten meal.",
    list: ["Soybean Meal", "Corn Gluten Meal", "Feed Ingredients"],
  },
];


const Services = ({
    wrapperCls,
    container,
}: ServiceSectionType) => {
    const serviceList = ServiceList;

    if(serviceList.length == 0) {
        return <NotFoundMsg message="No services found" />;
    }

    return (
        <div className={`multicolumn multicolumn-page ${wrapperCls}`}>
            <div className={container}>
                    <div className="multicolumn-inner">
                        <div className="grid grid-cols-12 md:gap-1 product-grid">
                            {services?.map((service, index) => (
                                <div 
                                    className="xl:col-span-4 md:col-span-6 col-span-12" 
                                    data-aos="fade-up"
                                    key={`card-service-${index}`}
                                >                                    
                                    <CardService data={service} />
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Services;