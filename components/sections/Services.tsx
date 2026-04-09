import "@/styles/multicolumn.css";
import { ServiceSectionType } from "@/types/serviceSection";
import ServiceList from "@/data/services.json";
import CardService from "../CardService";
import NotFoundMsg from "../NotFoundMsg";
import { GiWheat, GiSugarCane, GiChiliPepper, GiPlantRoots, GiCow } from "react-icons/gi";
import { FaSeedling } from "react-icons/fa";

const services = [
  {
    id: 1,
    slug: "rice",
    title: "Rice",
    icon: FaSeedling,
    image: "/img/service/s1.jpg",
    content: "...",
    description: "Premium quality rice sourcing and supply for international markets with reliable quality control.",
    list: [
      { title: "Basmati Rice" },
      { title: "Non-Basmati Rice" },
      { title: "Parboiled Rice" }
    ],
  },
  {
    id: 2,
    slug: "wheat",
    title: "Wheat",
    icon: GiWheat,
    image: "/img/service/s3.jpg",
    content: "...",
    description: "Quality wheat supply for international food processing and consumption markets.",
    list: [
      { title: "Milling Wheat" },
      { title: "Durum Wheat" },
      { title: "Feed Wheat" }
    ],
  },
  {
    id: 3,
    slug: "sugar",
    title: "Sugar",
    icon: GiSugarCane,
    image: "/img/service/s4.jpg",
    content: "...",
    description: "International sugar trading with ICUMSA standard compliance and quality certification.",
    list: [
      { title: "Raw Sugar" },
      { title: "Refined Sugar" },
      { title: "Brown Sugar" }
    ],
  },
  {
    id: 4,
    slug: "spices",
    title: "Spices",
    icon: GiChiliPepper,
    image: "/img/service/s5.jpg",
    content: "...",
    description: "Premium Indian spices export with Spice Board certification and quality assurance.",
    list: [
      { title: "Turmeric & Cumin" },
      { title: "Chili & Pepper" },
      { title: "Coriander & More" }
    ],
  },
  {
    id: 5,
    slug: "pulses",
    title: "Pulses",
    icon: GiPlantRoots,
    image: "/img/service/s6.jpg",
    content: "...",
    description: "Quality pulses supply including lentils, chickpeas, and various gram varieties.",
    list: [
      { title: "Lentils & Chickpeas" },
      { title: "Green Gram" },
      { title: "Black Gram" }
    ],
  },
  {
    id: 6,
    slug: "animal-feeds",
    title: "Animal Feeds",
    icon: GiCow,
    image: "/img/service/s7.jpg",
    content: "...",
    description: "Quality animal feed products including soybean meal and corn gluten meal.",
    list: [
      { title: "Soybean Meal" },
      { title: "Corn Gluten Meal" },
      { title: "Feed Ingredients" }
    ],
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