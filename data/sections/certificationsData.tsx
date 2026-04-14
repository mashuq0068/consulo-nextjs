import { SectionProps } from "@/types/sectionProps";
import WhyChooseUsBg from "@/public/img/why-choose-us/bg.jpg";
import WhyChooseUsImage from "@/public/img/why-choose-us/1.jpg";
import WhyChooseUsImageMobile from "@/public/img/why-choose-us/575.jpg";
import PromoImage from "@/public/img/why-choose-us/2.jpg";
import Icons from "@/components/Icons";

export const CertificationsData: SectionProps = {
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
  // Updated subheading, heading, text to match certifications
  subheading: "Regulatory Compliance & Quality Assurance",
  heading: "Government Approved Export Certifications",
  text: "Kirti Bhavya Enterprises holds mandatory registrations and licenses from India's top regulatory bodies, ensuring every shipment meets international quality, safety, and legal standards.",
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
      icon: <Icons.Awards />, // Reusing existing icon
      title: "APEDA",
      text: "Registered with APEDA for export of agricultural and processed food products including rice, wheat, pulses, fruits, vegetables, and other agro commodities. ",
      image: "/img/certifications/apeda.webp"
    },
    {
      icon: <Icons.Awards />,
      title: "Spice Board",
      text: "Registered with Spice Board of India for export of spices and spice products with mandatory quality certification and Spice House registration. ",
      image: "/img/certifications/Spices_Board.png"
    },
    {
      icon: <Icons.Awards />,
      title: "FSSAI",
      text: "Licensed under FSSAI for food business operations ensuring compliance with food safety standards, hygiene protocols, and quality regulations. ",
      image: "/img/certifications/fassai-logo.png"
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
