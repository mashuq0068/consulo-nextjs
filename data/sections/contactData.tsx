import { SectionProps } from "@/types/sectionProps";
import Icons from "@/components/Icons";

export const ContactData: SectionProps = {
    wrapperCls: "section-padding",
    container: "container",
    subheading: "Contact Us",
    heading: "Get in Touch with Us",
    text: "Kirti Bhavya Enterprises Private Limited (KBEPL) is a dynamic and growth-focused enterprise built on the pillars of global experience, operational excellence, and innovation.",
    promotions: [
        {
            icon: <Icons.ThumbsUp />,
            title: "Global Experience",
            text: "Global sourcing and supply of agro commodities and food products across multiple international markets.",
        },
        {
            icon: <Icons.Support />,
            title: "Reliable Support",
            text: "Dedicated support for all your trading and export documentation needs.",
        },
    ],
    block: {
        heading: "Send Us a Message",
        text: "Feel free to contact us, we are happy to help with your trading requirements.",
    },
}
