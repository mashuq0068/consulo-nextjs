import { SectionProps } from "@/types/sectionProps";
import WhyChooseUsBg from "@/public/img/why-choose-us/bg.jpg";
import WhyChooseUsImage from "@/public/img/why-choose-us/1.jpg";
import WhyChooseUsImageMobile from "@/public/img/why-choose-us/575.jpg";
import PromoImage from "@/public/img/why-choose-us/2.jpg";
import Icons from "@/components/Icons";

export const WhyChooseUsGridBgData: SectionProps = {
    wrapperCls: "!bg-transparent mt-100 section-padding",
    container: "container",
    backgroundImage: {
        src: WhyChooseUsBg.src,
        width: 1920,
        height: 887,
        loading: "lazy",
        alt: "Background image"
    },
    image: {
        src: WhyChooseUsImage.src,
        srcMobile: WhyChooseUsImageMobile.src,
        width: 1000,
        height: 742,
        loading: "lazy",
        alt: "Choose us image"
    },
    subheading: "Vision & Mission",
    heading: "Building a Globally Respected Enterprise",
    text: "With strong leadership, global networks, and market knowledge, KBEPL aims to build a sustainable, efficient, and customer-focused international trading and distribution business.",
    button: {
        label: "Learn More",
        href: "/contact-us",
        type: "primary"
    },
    rotatingLogo: {
        logo: <Icons.ChooseRotatingLogo />,
        text: "25",
    },
    promotions: [
        {
            icon: <Icons.Mission />,
            title: "Our Mission",
            text: "To build a reliable global trading and distribution company by providing quality products, efficient supply chain solutions, transparent operations, and long-term value to customers, suppliers, and partners.",
        },
        {
            icon: <Icons.Vision />,
            title: "Our Vision",
            text: "To become a globally respected enterprise that strengthens international supply chains, empowers retail and distribution ecosystems, and builds sustainable, technology-driven solutions.",
        },
        {
            icon: <Icons.Awards />,
            title: "Core Values",
            text: "Integrity & Transparency, Partnership & Trust, Innovation with Purpose, Long-Term Relationships, Sustainable Growth.",
        },
    ],
    promoImage: {
        src: PromoImage.src,
        width: 800,
        height: 834,
        loading: "lazy",
        alt: "Choose us image"
    },
}
