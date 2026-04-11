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
const Certifications = ({ data }: { data: SectionProps }) => {
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
    <div style={{ marginBottom: "100px" }} className={`${wrapperCls}`}>
      {/* {backgroundImage && (
        <div className="media media-bg">
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt ? backgroundImage.alt : "Background image"}
            width={backgroundImage.width}
            height={backgroundImage.height}
            loading={backgroundImage.loading}
          />
        </div>
      )} */}
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
            <div className="">
              <div className="grid grid-cols-12  gap-1">
                {promotions.map((item, index) => (
                  <div
                    className="col-span-12  md:col-span-2 lg:col-span-4 "
                    data-aos="fade-up"
                    key={`promo-${index}`}
                  >
                    <div className="card-icon-text card-icon-text-horizontal">
                      {item.icon && (
                        <div className="svg-wrapper">{item.icon}</div>
                      )}

                      <div className="content">
                        {item.title && (
                          <h2 className="heading text-20 fw-700">
                            {item.title}
                          </h2>
                        )}
                        {item.title === "Our Core Values" ? (
                          <ul
                            style={{
                              paddingLeft: "0",
                              marginTop: "10px",
                              listStyle: "none",
                            }}
                          >
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
        <div
          style={{
            position: "relative",
            marginTop: "50px",
            width: "100%",
            minHeight: "100vh",
            backgroundImage:
              "url(https://elements-resized.envatousercontent.com/envato-dam-assets-production/1da902e5-8bb7-4bc2-883f-e253ca487511/ac237032-b223-4705-9f35-14287df4ba59.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=17d5fea155f977e7ebcdc718158641c42c331288be63f4787ea8cf0a1fd69876)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(255,242,214,0.57) 0%, rgba(215,143,71,0.50) 100%)",
              zIndex: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Certifications;
