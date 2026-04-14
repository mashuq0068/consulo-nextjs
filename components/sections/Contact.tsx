"use client";

import "@/styles/form.css";
import "@/styles/contact.css";
import { useState } from "react";
import Subheading from "../Subheading";
import Heading from "../Heading";
import Text from "../Text";
import Form from "../Form";
import TextField from "../TextField";
import TextArea from "../TextArea";
import { SectionProps } from "@/types/sectionProps";
import SecondaryButton from "../buttons/SecondaryButton";
import MapSection from "./Map";
import { FiMapPin, FiPhone, FiMail, FiGlobe } from "react-icons/fi";
import Image from "next/image";
import Icons from "../Icons";

const ContactSection = ({ data }: { data: SectionProps }) => {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    wrapperCls,
    container,
    subheading,
    heading,
    text,
    promotions,
    block,
  } = data || {};

  const contactItems = [
    {
      icon: <FiMapPin />,
      label: "Office Address",
      value:
        "505-506, The Capital 2, Science City Road, Sola, Ahmedabad-380060",
      isLink: false,
    },
    {
      icon: <FiPhone />,
      label: "Landline",
      value: "+91 7945942348",
      isLink: true,
      href: "tel:+917945942348",
    },
    {
      icon: <FiPhone />,
      label: "Phone/WhatsApp",
      value: "+91 99749 26271",
      isLink: true,
      href: "tel:+919974926271",
    },
    {
      icon: <FiMail />,
      label: "Email",
      value: "info@kirtibhavya.com",
      isLink: true,
      href: "mailto:info@kirtibhavya.com",
    },
  ];

  const clearMessage = (time: number) => {
    setTimeout(() => {
      setMessage("");
    }, time);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const formMessage = await response.json();

      if (response.ok) {
        setLoading(false);
        setStatus("success");
        setMessage(formMessage.message);
        form.reset();
        clearMessage(6000);
      } else {
        setLoading(false);
        setStatus("error");
        setMessage(formMessage.error);
        clearMessage(4000);
      }
    } catch (error: any) {
      setLoading(false);
      setStatus("error");
      setMessage(error.message);
      clearMessage(4000);
    }
  };

  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap:15px;
          margin-top: 50px;
          width: 100%;
        }

        .contact-info-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .contact-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          background: linear-gradient(135deg, #f0f0f0 0%, #f8f8f8 100%);
          border-radius: 12px;
        }

        .contact-icon {
          font-size: 20px;
          color: #000;
          transition: color 0.4s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-info-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .contact-info-label {
          font-weight: 700;
          margin-bottom: 8px;
          display: block;
        }

        .contact-info-value {
          font-size: 16px;
          font-weight: 500;
          color: #000;
          line-height: 1.6;
          transition: color 0.3s ease;
          word-break: break-word;
          margin: 0;
        }

        /* Link styles - underlined and black */
        .contact-link {
          font-size: 16px;
          font-weight: 500;
          color: #000 !important;
          text-decoration: underline;
          text-decoration-thickness: 1px;
          text-underline-offset: 4px;
          line-height: 1.6;
          transition: all 0.2s ease;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          margin: 0;
          display: inline-block;
        }

        .contact-link:hover {
          color: #333 !important;
          text-decoration-thickness: 2px;
          text-underline-offset: 5px;
        }

        .contact-info-item:hover .contact-info-value:not(.contact-link) {
          color: #000;
        }

        @media (max-width: 768px) {
          .contact-info {
            gap: 16px;
            margin-top: 40px;
          }

          .contact-info-item {
            padding: 20px 20px;
            gap: 16px;
          }

          .contact-icon-wrapper {
            width: 30px;
            height: 30px;
          }

          .contact-icon {
            font-size: 18px;
          }

          .contact-info-label {
            font-size: 11px;
            margin-bottom: 6px;
          }

          .contact-info-value,
          .contact-link {
            font-size: 15px;
          }
        }

        @media (max-width: 480px) {
          .contact-info {
            gap: 12px;
            margin-top: 30px;
          }

          .contact-info-item {
            padding: 16px 16px;
            gap: 14px;
          }

          .contact-icon-wrapper {
            width: 44px;
            height: 44px;
          }

          .contact-icon {
            font-size: 20px;
          }

          .contact-info-label {
            font-size: 10px;
            margin-bottom: 4px;
          }

          .contact-info-value,
          .contact-link {
            font-size: 14px;
            line-height: 1.5;
          }
        }
      `}</style>

      <div className={`section-contact-form ${wrapperCls}`}>
        <div className={container}>
          <div className="contact-box radius18">
            <div className="grid max-xxl:grid-cols-2 xxl:flex product-grid justify-between xxl:gap-[30px]">
              <div className="max-lg:col-span-2 max-xxl:col-span-1 col-contact-content">
                <div className="section-headings">
                  {subheading && (
                    <Subheading
                      title={subheading}
                      cls="text-20"
                      aos="fade-up"
                    />
                  )}

                  {heading && (
                    <Heading title={heading} cls="text-50" aos="fade-up" />
                  )}

                  {text && <Text text={text} cls="text-18" aos="fade-up" />}

                  {promotions?.map((item, index) => (
                    <div
                      className="card-icon-text card-icon-text-horizontal"
                      key={`promo-${index}`}
                    >
                      {item.icon && (
                        <div className="svg-wrapper" data-aos="fade-up">
                          {item.icon}
                        </div>
                      )}

                      <div className="content">
                        {item.title && (
                          <h2
                            className="heading text-24 fw-700"
                            data-aos="fade-up"
                          >
                            {item.title}
                          </h2>
                        )}

                        {item.text && (
                          <p className="text text-16" data-aos="fade-up">
                            {item.text}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Premium Contact Info with Icons */}
                  <div className="contact-info" data-aos="fade-up">
                    {/* WhatsApp QR Section */}
                    {/* WhatsApp QR Section */}
                    <div style={{ marginTop: "40px" }} data-aos="fade-up">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "20px",
                          padding: "20px",
                          borderRadius: "16px",
                          background:
                            "linear-gradient(135deg, #f8f8f8, #ffffff)",
                          border: "1px solid #eee",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <div
                          style={{
                            width: "100px",
                            height: "100px",
                            minWidth: "100px",
                            borderRadius: "12px",
                            overflow: "hidden",
                            background: "#fff",
                            border: "1px solid #eee",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {/* Dummy QR */}
                          <Image
                            src="/img/contact/whatsapp-qr-code.jpeg"
                            alt="WhatsApp QR"
                            width={100}
                            height={100}
                            style={{ objectFit: "cover" }}
                          />
                        </div>

                        <div style={{ flex: 1 }}>
                          <h4
                            style={{
                              fontSize: "18px",
                              fontWeight: 700,
                              marginBottom: "6px",
                            }}
                          >
                            Scan to Connect
                          </h4>

                          {/* <p
                            style={{
                              fontSize: "14px",
                              color: "#555",
                              marginBottom: "10px",
                              lineHeight: 1.5,
                            }}
                          >
                            Message Priya Gupta~Kirti Bhavya Enterprises Pvt Ltd
                            on WhatsApp.
                          </p> */}

                          <a
                            href="https://wa.me/message/MOTTSORNXQ3YG1"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              fontSize: "14px",
                              fontWeight: 600,
                              textDecoration: "underline",
                              color: "#000",
                            }}
                          >
                            Open WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                    {contactItems.map((item, index) => (
                      <div key={index} className="contact-info-item">
                        <div className="contact-icon-wrapper">
                          <div className="contact-icon">{item.icon}</div>
                        </div>
                        <div className="contact-info-content">
                          <span className="contact-info-label">
                            {item.label}
                          </span>
                          {item.isLink ? (
                            <a
                              href={item.href}
                              className="contact-link"
                              target={item.target || "_self"}
                              rel={
                                item.target === "_blank"
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="contact-info-value">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
               {/* SOCIAL MEDIA */}
<div style={{ marginTop: "35px" }} data-aos="fade-up">
  <h4
    style={{
      fontSize: "18px",
      fontWeight: 700,
      marginBottom: "14px",
    }}
  >
    Follow Us
  </h4>

  <div
    style={{
      display: "flex",
      gap: "14px",
      alignItems: "center",
      flexWrap: "wrap",
    }}
  >
    {/* Facebook */}
    <a
      href="https://www.facebook.com/profile.php?id=61585380045467"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: "52px",
        height: "52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px",
        border: "1px solid #eee",
        background: "#fff",
        transition: "all 0.25s ease",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "26px",
          height: "26px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/img/social/facebook.webp"
          alt="Facebook"
          width={26}
          height={26}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/company/110299950/admin/dashboard/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: "52px",
        height: "52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px",
        border: "1px solid #eee",
        background: "#fff",
        transition: "all 0.25s ease",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "26px",
          height: "26px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/img/social/linkedin.png"
          alt="LinkedIn"
          width={26}
          height={26}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
    </a>

    {/* Instagram */}
    <a
      href="https://www.instagram.com/kirtibhavya.enterprises/?hl=en"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: "52px",
        height: "52px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px",
        border: "1px solid #eee",
        background: "#fff",
        transition: "all 0.25s ease",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "30px",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src="/img/social/instagram.jpg"
          alt="Instagram"
          width={30}
          height={30}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>
    </a>
  </div>
</div>
                </div>
              </div>

              <div className="max-lg:col-span-2 max-xxl:col-span-1 col-contact-form">
                <MapSection />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
