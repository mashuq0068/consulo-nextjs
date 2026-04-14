import "@/styles/image-with-text.css";
import { SectionProps } from "@/types/sectionProps";
import Image from "next/image";
import Subheading from "../Subheading";
import Heading from "../Heading";
import Text from "../Text";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Icons from "../Icons";

const ImageText = ({ data }: { data: SectionProps }) => {
  const {
    wrapperCls,
    container,
    image,
    subheading,
    heading,
    text,
    textList,
    button,
  } = data || {};

  return (
    <div className={`image-text ${wrapperCls}`}>
      <div className={container ? container : "container"}>
        <div className="grid lg:grid-cols-2 lg:gap-1 items-center">
          <div className="lg:col-span-1 col-span-2">
            {image && (
              <div className="media-wrap" data-aos="zoom-in-up">
                <Image
                  src={"/img/about/about.jpeg"}
                  width={image.width}
                  height={image.height}
                  loading={image.loading}
                  alt={image.alt ? image.alt : "Image"}
                />
              </div>
            )}
          </div>

          <div className="lg:col-span-1 col-span-2">
            <div className="content section-headings">
              {subheading && (
                <Subheading title={subheading} cls="text-20" aos="fade-up" />
              )}

              {heading && (
                <Heading title={heading} cls="text-50" aos="fade-up" />
              )}

              <div style={{fontSize:'18px', display:'flex', flexDirection:'column', gap:'10px', marginTop:'20px'}}>
                <p>
                  Kirti Bhavya Enterprises Private Limited  is a dynamic
                  and growth-focused enterprise built on the pillars of global
                  experience, operational excellence, and innovation.
                </p>
                <p>
                  The company operates through multiple business verticals
                  including International Trading, Food Distribution, and
                  Tech-Enabled Retail transformation. The organisation focuses
                  on building efficient and reliable supply chains that connect
                  producers, suppliers, and buyers across global markets.
                </p>
                <p>
                  With strong leadership, global networks, and market knowledge,
                  Kirti Bhavya Enterprises aims to build a sustainable, efficient, and
                  customer-focused international trading and distribution
                  business.
                </p>
              </div>
              {/* {textList &&
                                <ul className="text-lists list-unstyled">
                                    {textList.map((item, index) => (
                                        <li 
                                            className="text-item text text-18" 
                                            data-aos="fade-up" 
                                            key={`text-item-${index}`}
                                        >
                                            <Icons.Check />
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            } */}

              {button && (
                <div className="buttons" data-aos="fade-up">
                  {button.type == "primary" && (
                    <PrimaryButton
                      label={button.label}
                      href={button.href}
                      ariaLabel={button.label}
                    />
                  )}

                  {button.type == "secondary" && (
                    <SecondaryButton
                      label={button.label}
                      href={button.href}
                      ariaLabel={button.label}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageText;
