import { SectionProps } from "@/types/sectionProps";
import SliderImage from "@/public/img/slider/b1.jpg";
import SliderImageTablet from "@/public/img/slider/b-991.jpg";
import SliderImageMobile from "@/public/img/slider/b-575.jpg";

export const HeroBannerData: SectionProps = { 
    wrapperCls: "with-floating-header with-fixed-bg",
    subheading: "welcome to Consulo",
    heading: "Business Growth Made Simple",
    text: "Transform your business with expert consultancy services our team of seasoned consultants unparalleled. Transform your business.",
    button: {
        label: "Free Consultation",
        type: "secondary",
        href: "/img/slider/new-hero-3.jpg"
    },
    image: {
        src: "/img/slider/new-hero-3.jpg",
        srcMobile: "/img/slider/new-hero-3.jpg",
        srcTablet: "/img/slider/new-hero-3.jpg",
        width: 1920,
        height: 1000,
        alt: "Banner Image",
        loading: "eager",
        cls: "slider-media"
    }
}
