import { SectionProps } from "@/types/sectionProps";
import Icons from "@/components/Icons";

export const ContactData: SectionProps = {
    wrapperCls: "section-padding",
    container: "container",
    subheading: "Contact Us",
    heading: "Get in Touch with Us",
    text: "We are here to assist you with your international trading requirements. Reach out to us for inquiries, partnerships, or any business-related queries.",
    promotions: [
        {
            icon: <Icons.ThumbsUp />,
            title: "Global Experience",
            text: "Nearly 25 years of expertise across Africa, North America, and Asia.",
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
