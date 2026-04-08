import { SectionProps } from "@/types/sectionProps";
import Image1 from '@/public/img/image-text/img1.png';

export const ImageTextData: SectionProps = {
    wrapperCls: "mt-100",
    container: "container",
    subheading: "About Us",
    heading: "A Dynamic and Growth-Focused Enterprise",
    text: "Kirti Bhavya Enterprises Private Limited (KBEPL) is a dynamic and growth-focused enterprise built on the pillars of global experience, operational excellence, and innovation. The company operates through multiple business verticals including International Trading, Food Distribution, and Tech-Enabled Retail transformation. The organisation focuses on building efficient and reliable supply chains that connect producers, suppliers, and buyers across global markets.",
    button: {
        label: "More About Us",
        href: "/about-us",
        type: "primary"
    },
    image: {
        src: Image1.src,
        width: 992,
        height: 863,
        alt: 'Image',
        loading: 'lazy'
    },
    textList: [
        {
            text: "Global experience and innovation"
        },
        {
            text: "Operational excellence"
        },
        {
            text: "Long-term business relationships"
        }
    ]
}
