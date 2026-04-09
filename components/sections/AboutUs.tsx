// import "@/styles/image-with-text.css";

import Image from "next/image";
import Subheading from "../Subheading";
import Heading from "../Heading";
import PrimaryButton from "../buttons/PrimaryButton";


const AboutUs = ({button = false} : {button : boolean}) => {
  //   const {
  //     wrapperCls,
  //     container,
  //     image,
  //     subheading,
  //     heading,
  //     text,
  //     textList,
  //     button,
  //   } = data || {};

  return (
    <div style={{marginTop:'120px'}} className={`image-text `}>
      <div className={"container"}>
        <div className="grid lg:grid-cols-2 lg:gap-3 items-center">
          <div className="lg:col-span-1 col-span-2">
            <div className="media-wrap" data-aos="zoom-in-up">
              <Image
                src={"/img/about/about.jpeg"}
                width={600}
                height={400}
                alt={"Image"}
              />
            </div>
          </div>

          <div className="lg:col-span-1 col-span-2">
            <div className="content section-headings">
          
                <Subheading title={"About Us"} cls="text-20" aos="fade-up" />
              

            
                <Heading title={"A Dynamic and Growth-Focused Enterprise"} cls="text-50" />
             

              <div
                style={{
                  fontSize: "18px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "20px",
                }}
              >
                <p>
                  Kirti Bhavya Enterprises Private Limited (KBEPL) is a dynamic
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
                  KBEPL aims to build a sustainable, efficient, and
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
                  
                    <PrimaryButton
                      label={"More About Us"}
                      href={"/about-us"}
                      ariaLabel={"More About Us"}
                    />
                

                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
