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
    alt: "Background image",
  },
  image: {
    src: WhyChooseUsImage.src,
    srcMobile: WhyChooseUsImageMobile.src,
    width: 1000,
    height: 742,
    loading: "lazy",
    alt: "Choose us image",
  },
  subheading: "Vision, Mission & Values",
  heading: "Building a Globally Respected Enterprise",
  text: "With strong leadership, global networks, and market knowledge, Kirti Bhavya Enterprises aims to build a sustainable, efficient, and customer-focused international trading and distribution business.",
  button: {
    label: "Learn More",
    href: "/contact-us",
    type: "primary",
  },
  rotatingLogo: {
    logo: <Icons.ChooseRotatingLogo />,
    text: "25",
  },
  promotions: [
    {
      image:
        "https://elements-resized.envatousercontent.com/envato-dam-assets-production/bf1c8381-32aa-4189-aaf6-1c4bd8917591/77cb28dc-b359-46a9-b8d6-12f88d765a4f.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=c26430bc283b2863ec39be6ab6e89004efc1206401ef5e12c776c6e006787a64",
      icon: <Icons.Vision />,
      title: "Our Vision",
      text: "To become a globally respected enterprise that strengthens international supply chains,empowers retail and distribution ecosystems, and builds sustainable, technology-driven solutions that create long-term value across markets.",
    },
    {
      image:
        "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/30/70/83/7a/7d/v1_E11/E114GSYC.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=c309b9a39cd7daab9d256154507bd2827755e1ee661dea0d40416062ab5fc95a",
      icon: <Icons.Mission />,
      title: "Our Mission",
      text: "To build a reliable global trading and distribution company by providing quality products,efficient supply chain solutions, transparent operations, and long-term value to customers,suppliers, and partners.",
    },
    // core values should come in points instead of paragraph
    //  Integrity &amp; Transparency
    //  Partnership &amp; Trust
    //  Innovation with Purpose
    //  Long-Term Relationships
    //  Sustainable Growth
    {
      image:
        "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/1b/88/d4/af/e4/v1_E11/E113ZINP.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=7416b2b6bc54494f462b33837846c5ce2cdb61725fda5199c6f96a8114d8f915",
      icon: <Icons.Awards />,
      title: "Our Core Values",
      text: "<ul><li>Integrity & Transparency</li><li>Partnership & Trust</li><li>Innovation with Purpose</li><li>Long-Term Relationships</li><li>Sustainable Growth</li></ul>",
    },
  ],
  // promoImage: {
  //     src: PromoImage.src,
  //     width: 800,
  //     height: 834,
  //     loading: "lazy",
  //     alt: "Choose us image"
  // },
};
