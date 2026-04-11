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
    image:"https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/e9/0f/b2/66/03/v1_E10/E10B99I.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=3abbb2c731db45f01520cba37503be2f0f5e045b27003fccbac601fa8942a4fc",
    // image: "/img/service/s1.jpg",
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
     image:"https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/f1/b0/6d/37/1b/v1_E10/E10B14Z4.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=13b4c47a6f50af5d68e3906470d86da66cce2bf557838a75e08cf2b8ef5590b1",
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
     image:"https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/2a/8c/e3/c8/47/v1_E10/E107SY8T.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=9db794af835b214ebd21763572617e4ea43d2ee38f1f04aa2fd8410ef5d2c88f",
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
    image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/1a/1c/69/02/ab/v1_E10/E102I8CF.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=f73b872ec52d37a9a088c3d24ba4ff2798903e6166c7f9b28c0b44767b35f7b8",
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
    image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/e6304ca4-b9cc-4b4c-9851-23054c9f6374/68ab5f31-79f0-4f85-b1bf-4d7c2a3cd547.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=0e02e371c58f9bd1b7c4e3e25547a0bb95cc5ccdf31e145380b389920e400ace",
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
    image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/53/62/33/81/ba/v1_E10/E105NLDL.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=bb7c1e7766f4d9b3ea3fa0525b0528619780f703702957014047c92b79cc2186",
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
       <div className={`multicolumn ${wrapperCls}`}>
     

            <div className={container}>
                {/* <div className="multicolumn-header section-headings">
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
                </div> */}

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


            </div>
        </div>
    )
}

export default Services;