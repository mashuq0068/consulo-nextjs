import "@/styles/why-choose-us.css";
import { SectionProps } from "@/types/sectionProps";
import Heading from "../Heading";
import Subheading from "../Subheading";
import Text from "../Text";
import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";

const dotStyle = {
  height: "8px",
  width: "8px",
  borderRadius: "50%",
  backgroundColor: "#4b5563",
  display: "inline-block",
  marginRight: "10px",
};
const WhyChooseUsGrid = ({ data }: { data: SectionProps }) => {
  const {
    wrapperCls,
    container,
    subheading,
    heading,
    text,
    button,
    image,
    promotions,
    rotatingLogo,
    promoImage,
    backgroundImage,
  } = data || {};

  return (
    <div className={`${wrapperCls}`}>
  
      <div className={container}>
        <div className="choose-top">
          <div>
            {/* <div className="col-span-2 lg:col-span-1">
                            {image && 
                                <picture className="choose-media radius18" data-aos="fade-right">
                                    {image.srcMobile &&
                                        <source
                                            media="(max-width: 575px)"
                                            srcSet={image.srcMobile}
                                        />
                                    }
                                <Image 
                                    src={image.src}
                                    alt={image.alt ? image.alt : 'Image'}
                                    width={image.width}
                                    height={image.height}
                                    loading={image.loading}
                                />
                                </picture>
                            }
                        </div> */}

            <div
              style={{ textAlign: "center" }}
              className="col-span-2 lg:col-span-1"
            >
              <div className="choose-us-content section-headings">
                {subheading && (
                  <Subheading title={subheading} cls="text-20" aos="fade-up" />
                )}
                 
                {heading && (
                  <Heading title={heading} cls="text-50" aos="fade-up" />
                )}

                {/* {text &&
                                    <Text 
                                        text={text}
                                        cls="text-18"
                                        aos="fade-up"
                                    />
                                } */}

                {/* {button &&
                                    <div className="buttons" data-aos="fade-up">
                                        {button.type == 'primary' &&
                                            <PrimaryButton 
                                                label={button.label}
                                                href={button.href}
                                                ariaLabel={button.label}
                                            />
                                        }

                                        {button.type == 'secondary' &&
                                            <SecondaryButton 
                                                label={button.label}
                                                href={button.href}
                                                ariaLabel={button.label}
                                            />
                                        }
                                    </div>
                                }

                                {rotatingLogo &&
                                    <div className="choose-logo">
                                        <div 
                                            className="choose-rotating-logo" 
                                            data-aos="zoom-in-up"
                                        >
                                            {rotatingLogo.logo && 
                                                <span className="svg-wrapper infinite-rotate">
                                                    {rotatingLogo.logo}
                                                </span>
                                            }

                                            {rotatingLogo.text && 
                                                <span className="text-abs">{rotatingLogo.text}</span>
                                            }
                                        </div>
                                    </div>
                                } */}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          {promotions && (
            <div  className="">
              <div  className="grid grid-cols-12  gap-1">
                {promotions.map((item, index) => (
                  <div
                    
                    className="col-span-12  md:col-span-2 lg:col-span-4 "
                    data-aos="fade-up"
                    key={`promo-${index}`}
                  >  
                    <img style={{marginBottom:'20px'}} src={item.image} alt="" />
                    <div className="card-icon-text card-icon-text-horizontal">
                      {/* {item.icon && (
                        <div style={{backgroundColor:'#D78F47'}} className="svg-wrapper">{item.icon}</div>
                      )} */}

                      <div className="content">
                        {item.title && (
                          <h2 className="heading text-20 fw-700">
                            {item.title}
                          </h2>
                        )}
                        {item.title === "Our Core Values" ? (
                          <ul style={{ paddingLeft: "0", marginTop:"10px", listStyle: "none" }}>
                            <li
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "10px",
                              }}
                            >
                              <span
                                style={{
                                  height: "8px",
                                  width: "8px",
                                  borderRadius: "50%",
                                  backgroundColor: "#4b5563",
                                  display: "inline-block",
                                  marginRight: "10px",
                                }}
                              ></span>
                              <span>Integrity & Transparency</span>
                            </li>

                            <li
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "10px",
                              }}
                            >
                              <span style={dotStyle}></span>
                              <span>Partnership & Trust</span>
                            </li>

                            <li
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "10px",
                              }}
                            >
                              <span style={dotStyle}></span>
                              <span>Innovation with Purpose</span>
                            </li>

                            <li
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "10px",
                              }}
                            >
                              <span style={dotStyle}></span>
                              <span>Long-Term Relationships</span>
                            </li>

                            <li
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <span style={dotStyle}></span>
                              <span>Sustainable Growth</span>
                            </li>
                          </ul>
                        ) : (
                          item.text && (
                            <p className="text text-16">{item.text}</p>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default WhyChooseUsGrid;
