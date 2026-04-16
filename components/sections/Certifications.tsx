import "@/styles/why-choose-us.css";
import { SectionProps } from "@/types/sectionProps";
import Heading from "../Heading";
import Subheading from "../Subheading";
import Image from "next/image";

const Certifications = ({ data }: { data: SectionProps }) => {
  const { wrapperCls, container, subheading, heading, promotions } =
    data || {};

  return (
    <div style={{ marginBottom: "100px" }} className={wrapperCls}>
      <div className={container}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          {subheading && (
            <Subheading title={subheading} cls="text-20" aos="fade-up" />
          )}

          <div style={{marginTop:'30px'}}>
            {heading && (
            <Heading title={heading} cls="text-40" aos="fade-up" />
          )}
          </div>
        </div>

        {/* PROMOTIONS */}
        <div className="mt-3">
          {promotions && (
            <div className="grid grid-cols-12 gap-1">
              {promotions.map((item, index) => (
                <div
                  key={`promo-${index}`}
                  data-aos="fade-up"
                  className="col-span-12 md:col-span-2 lg:col-span-4"
                >
                  {/* ✅ CARD */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      padding: "20px",
                    }}
                  >
                    {/* LOGO */}
                    {item.image && (
                      <div
                        style={{
                          marginBottom: "12px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title || "logo"}
                          width={60}
                          height={60}
                          style={{
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    )}

                    {/* TITLE */}
                    {item.title && (
                      <h2
                        style={{
                          fontSize: "18px",
                          fontWeight: 700,
                          marginBottom: "10px",
                        }}
                      >
                        {item.title}
                      </h2>
                    )}

                    {/* DESCRIPTION */}
                    {item.title === "Our Core Values" ? (
                      <ul
                        style={{
                          padding: 0,
                          margin: 0,
                          listStyle: "none",
                          textAlign: "left",
                        }}
                      >
                        <li>• Integrity & Transparency</li>
                        <li>• Partnership & Trust</li>
                        <li>• Innovation with Purpose</li>
                        <li>• Long-Term Relationships</li>
                        <li>• Sustainable Growth</li>
                      </ul>
                    ) : (
                      item.text && (
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#555",
                            lineHeight: "1.6",
                          }}
                        >
                          {item.text}
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* BACKGROUND SECTION */}
        {/* <div
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
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(255,242,214,0.57) 0%, rgba(215,143,71,0.50) 100%)",
              zIndex: 1,
            }}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Certifications;