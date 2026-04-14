import { SectionProps } from "@/types/sectionProps";
import Image1 from "@/public/img/project/1.jpg";
import Image2 from "@/public/img/project/2.jpg";
import Image3 from "@/public/img/project/3.jpg";

export const RecentProjectData: SectionProps = {
    wrapperCls: "mt-100",
    container: "container",
    link: "/about-us",
    subheading: "Global Reach",
    heading: "Connecting Producers, Suppliers, and Buyers Across Markets",
    text: "With a long-term vision to integrate technology with distribution and retail ecosystems, Kirti Bhavya Enterprises aims to build efficient supply chains that connect producers, suppliers, and buyers across global markets.",        
    imageList: [
        {
            src: Image1.src,
            width: 1000,
            height: 595,
            loading: "lazy",
            alt: "Global trading image"
        },
        {
            src: Image2.src,
            width: 500,
            height: 385,
            loading: "lazy",
            alt: "Supply chain image"
        },
        {
            src: Image3.src,
            width: 500,
            height: 385,
            loading: "lazy",
            alt: "Distribution image"
        },
    ],
    block: {
        heading: "Building Efficient Supply Chains Worldwide",
        text: "We aim to build a sustainable, efficient, and customer-focused international trading and distribution business.",
        button: {
            label: "View Services",
            href: "/services",
            type: "secondary"
        }
    },
}
