// import "@/styles/promotion.css";
import { SectionProps } from "@/types/sectionProps";
import Heading from "../Heading";
import Subheading from "../Subheading";
import Text from "../Text";
import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import PromotionList from "../PromotionList";
import CounterUpVertical from "./CounterUpVertical";

// const whyChooseUsData = {
//   wrapperCls: "py-5 bg-white",
//   container: "container",

//   subheading: "WHY CHOOSE US",

//   heading: "We Transform Your Requirements into Reliable Exports",

//   text: "At Kirti Bhavya Enterprises, we focus on understanding client requirements and converting them into reliable, timely, and high-quality exports. We don’t just supply products — we deliver consistency, quality, transparency, and trust in every shipment.",

//   promotions: [
//     { title: "Experience" },
//     { title: "Reliability" },
//     { title: "Quality Control" },
//   ],

//   image: {
//     src: "/img/about/why-choose.jpg",
//     width: 600,
//     height: 500,
//     alt: "Why Choose Us",
//   },
// };

const WhyChooseUs = ({ data }: { data: SectionProps }) => {
  const {
    wrapperCls,
    container,
    subheading,
    heading,
    text,
    button,
    image,
    promotions,
    counterData,
  } = data || {};

  return (
    <div
      style={{ background: "transparent", color: "black", padding: "0px" }}
      className={`promotion ${wrapperCls}`}
    >
      <div className={container}>
        <div className="promotion-container">
          <div className="grid grid-cols-12 lg:gap-1">
            <div className="lg:col-span-12 col-span-12">
              <div
                style={{ textAlign: "center", color: "black" }}
                className="promtion-content section-headings"
              >
                {subheading && (
                  <Subheading
                    title={subheading}
                    cls="text-20"
                    aos="fade-right"
                  />
                )}

                {heading && (
                  <Heading
                    title={heading}
                    cls="text-50"
                    aos="fade-right"
                    aosDelay="200"
                  />
                )}

                {text && (
                  <Text
                    text={text}
                    cls="text-18"
                    aos="fade-right"
                    aosDelay="200"
                  />
                )}
              </div>
            </div>
            {/* <div className="lg:col-span-5 col-span-12">
                            <div className="promotion-img radius18" data-aos="flip-left">
                                {image &&
                                    <Image
                                        src={image.src}
                                        width={image.width}
                                        height={image.height}
                                        loading={image.loading}
                                        alt={image.alt ? image.alt : 'Image'}
                                    />
                                }
                            </div>
                        </div> */}
          </div>
          {/* {counterData && <CounterUpVertical data={counterData} />} */}
        </div>
        <div
          style={{
            position: "relative",
            marginTop: "50px",
            width: "100%",
            height: "700px", // ✅ FIXED HEIGHT (important)
            borderRadius: "16px",
            overflow: "hidden",
            backgroundImage:
              "url(https://i.ibb.co.com/ymzC4qGN/25114247-ded6-4577-988b-981deb637c05-2026-04-14.jpg)",
            backgroundSize: "contain", // fills without distortion
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* optional overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
             
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
