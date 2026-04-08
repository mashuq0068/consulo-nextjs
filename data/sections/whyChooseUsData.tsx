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
        alt: "Promotion image"
    },
    subheading: "Why Choose Us",
    heading: "We Transform Your Requirements into Reliable Exports",
    text: "At Kirti Bhavya Enterprises, we focus on understanding client requirements and converting them into reliable, timely, and high-quality exports. We don't just supply products—we deliver consistency, quality, transparency, and trust in every shipment.",
    button: {
        label: "Discover More",
        href: "/about-us",
        type: "secondary"
    },
    promotions: [
        {
            icon: <Icons.Winning />,
            title: "Experience & <br />Reliability",
            text: "Global sourcing networks with reliable supply chain management.",
        },
        {
            icon: <Icons.Support />,
            title: "Quality <br />Control",
            text: "Ensuring consistency, transparency, and dependable execution.",
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
            title: "Quality Checks",
        },
        {
            number: 25,
            suffix: "+",
            title: "Years experiences",
        },
    ],
}