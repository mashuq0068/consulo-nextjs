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
      value: "505-506, The Capital 2, Science City Road, Sola, Ahmedabad-380060",
    },
    {
      icon: <FiPhone />,
      label: "Phone",
      value: "+91 99749 26271",
    },
    {
      icon: <FiMail />,
      label: "Email",
      value: "******************",
    },
    {
      icon: <FiGlobe />,
      label: "Website",
      value: "www.kirtibhavya.com",
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
          width: 56px;
          height: 56px;
          flex-shrink: 0;
          background: linear-gradient(135deg, #f0f0f0 0%, #f8f8f8 100%);
          border-radius: 12px;
        //   transition: all 0.4s ease;
        }

    

        .contact-icon {
          font-size: 28px;
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
          color: #333;
          line-height: 1.6;
          transition: color 0.3s ease;
          word-break: break-word;
          margin: 0;
        }

        .contact-info-item:hover .contact-info-value {
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
            width: 48px;
            height: 48px;
          }

          .contact-icon {
            font-size: 24px;
          }

          .contact-info-label {
            font-size: 11px;
            margin-bottom: 6px;
          }

          .contact-info-value {
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

          .contact-info-value {
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
                    <Subheading title={subheading} cls="text-20" aos="fade-up" />
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
                    {contactItems.map((item, index) => (
                      <div key={index} className="contact-info-item">
                        <div className="contact-icon-wrapper">
                          <div className="contact-icon">{item.icon}</div>
                        </div>
                        <div className="contact-info-content">
                          <span className="contact-info-label">{item.label}</span>
                          <p className="contact-info-value">{item.value}</p>
                        </div>
                      </div>
                    ))}
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