import { SectionProps } from "@/types/sectionProps";
import Image1 from "@/public/img/project/1.jpg";
import Image2 from "@/public/img/project/2.jpg";
import Image3 from "@/public/img/project/3.jpg";

export const RecentProjectData: SectionProps = {
    wrapperCls: "mt-100",
    container: "container",
    link: "/projects",
    subheading: "Global Reach",
    heading: "Connecting Producers, Suppliers, and Buyers Across Markets",
    text: "With a long-term vision to integrate technology with distribution and retail ecosystems, KBEPL aims to build efficient supply chains that connect producers, suppliers, and buyers across global markets.",        
    imageList: [
        {
            src: Image1.src,
            width: 1000,
            height: 595,
            loading: "lazy",
            alt: "Large image"
        },
        {
            src: Image2.src,
            width: 500,
            height: 385,
            loading: "lazy",
            alt: "Small image"
        },
        {
            src: Image3.src,
            width: 500,
            height: 385,
            loading: "lazy",
            alt: "Small image"
        },
    ],
    block: {
        heading: "Connecting Producers, Suppliers, and Buyers Across Markets",
        text: "We aim to build a sustainable, efficient, and customer-focused international trading and distribution business.",
        button: {
            label: "View Services",
            href: "/services",
            type: "secondary"
        }
    },
}