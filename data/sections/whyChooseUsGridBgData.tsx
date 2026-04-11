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
  text: "With strong leadership, global networks, and market knowledge, KBEPL aims to build a sustainable, efficient, and customer-focused international trading and distribution business.",
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
        "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/29/ae/f7/36/55/v1_E10/E10I7JO5.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=dd292f82cafabc878f995faf202899c0bd67f435ef3f12d7d580e96a5924fb0f",
      icon: <Icons.Vision />,
      title: "Our Vision",
      text: "To become a globally respected enterprise that strengthens international supply chains,empowers retail and distribution ecosystems, and builds sustainable, technology-driven solutions that create long-term value across markets.",
    },
    {
      image:
        "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/f5/92/e2/36/ae/v1_E10/E10JCMT.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=1e07c77395dee23dfb80f226ce15fa96a0fda2250fd41caade077eb3c071de71",
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
        "https://elements-resized.envatousercontent.com/envato-dam-assets-production/46fc6827-980d-491d-b4ca-429a0281d76f/a7de9a80-a6d8-49cf-a11f-7f7610cbd095.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=60b9a443c6437b36dc48c66de3a19414491c102d20e7d556904dd1db9de6964e",
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
