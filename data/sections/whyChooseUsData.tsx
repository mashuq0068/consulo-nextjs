import { SectionProps } from "@/types/sectionProps";
import WhyChooseUsImage from "@/public/img/promotion/1.jpg";
import Icons from "@/components/Icons";

export const WhyChooseUsData: SectionProps = {
    wrapperCls: "mt-100 section-padding",
    container: "container",
    image: {
        src: WhyChooseUsImage.src,
        width: 1000,
        height: 1469,
        loading: "lazy",
        alt: "Why choose us image"
    },
    subheading: "Partner With Us",
    heading: "We Transform Your Requirements into Reliable Exports",
    text: "At Kirti Bhavya Enterprises, we focus on understanding client requirements and converting them into reliable, timely, and high-quality exports. We don't just supply products — we deliver consistency, quality, transparency, and trust in every shipment.",
    button: {
        label: "Discover More",
        href: "/about-us",
        type: "secondary"
    },
    promotions: [
        {
            icon: <Icons.Winning />,
            title: "Experience",
            text: "Nearly 25 years of global experience in international trade, supply chain management, and logistics.",
        },
        {
            icon: <Icons.Support />,
            title: "Reliability",
            text: "Dependable execution and transparent processes in every shipment.",
        },
        {
            icon: <Icons.Winning />,
            title: "Quality Control",
            text: "Ensuring consistency, transparency, and dependable execution in every transaction.",
        },
    ],
    counterData: [
        {
            number: 25,
            suffix: "+",
            title: "Years Experience",
            aos: "fade-up",
            aosDelay: 20,
        },
        {
            number: 100,
            suffix: "%",
            title: "Quality Assurance",
        },
        {
            number: 50,
            suffix: "+",
            title: "Global Partners",
        },
    ],
};