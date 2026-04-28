"use client";

import "@/styles/why-choose-us.css";
import { SectionProps } from "@/types/sectionProps";
import Heading from "../Heading";
import Subheading from "../Subheading";
import Text from "../Text";
import { useRef } from "react";
import {
  FiEye,
  FiTarget,
  FiShield,
  FiCheckCircle,
} from "react-icons/fi";
import {
  HiOutlineLightBulb,

  HiOutlineGlobeAlt,
} from "react-icons/hi2";
import { MdOutlineGrowthOutlined } from "react-icons/md";
import { TbLeaf } from "react-icons/tb";
import { FaRegHandshake } from "react-icons/fa";

// Icon map per card
const cardIcons: Record<string, React.ReactNode> = {
  "Our Vision": <FiEye size={32} />,
  "Our Mission": <FiTarget size={32} />,
  "Our Core Values": <HiOutlineGlobeAlt size={32} />,
};

// Core values bullet icons
const valueIcons: React.ReactNode[] = [
  <FiShield size={15} />,
  <FaRegHandshake size={15} />,
  <HiOutlineLightBulb size={15} />,
  <FiCheckCircle size={15} />,
  <TbLeaf size={15} />,
];

const coreValues = [
  "Integrity & Transparency",
  "Partnership & Trust",
  "Innovation with Purpose",
  "Long-Term Relationships",
  "Sustainable Growth",
];

const WhyChooseUsGrid = ({ data }: { data: SectionProps }) => {
  const {
    wrapperCls,
    container,
    subheading,
    heading,
    text,
    promotions,
  } = data || {};

  return (
    <div className={`${wrapperCls}`}>
      <style>{`
        /* ── Card wrapper ── */
        .vmv-card {
          background: var(--color-background);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 40px 32px 36px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0;
          transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .vmv-card:hover {
          box-shadow: 0 16px 48px var(--color-shadow);
          transform: translateY(-6px);
          border-color: var(--color-border-hover);
        }

        /* Decorative corner accent */
        .vmv-card::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 80px;
          height: 80px;
          background: var(--color-background-subheading);
          border-radius: 0 20px 0 100%;
          transition: width 0.4s ease, height 0.4s ease;
        }
        .vmv-card:hover::before {
          width: 100px;
          height: 100px;
        }

        /* ── Icon circle ── */
        .vmv-icon-wrap {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: var(--color-primary-background);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          margin-bottom: 28px;
          flex-shrink: 0;
          box-shadow: 0 8px 24px var(--color-shadow);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          z-index: 1;
        }
        .vmv-card:hover .vmv-icon-wrap {
          transform: scale(1.1) rotate(-6deg);
          box-shadow: 0 12px 32px var(--color-shadow);
        }

        /* Outer ring */
        .vmv-icon-ring {
          width: 88px;
          height: 88px;
          border-radius: 50%;
          border: 1.5px dashed var(--color-border-hover);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          flex-shrink: 0;
          transition: border-color 0.3s ease;
          position: relative;
          z-index: 1;
        }
        .vmv-card:hover .vmv-icon-ring {
          border-color: var(--color-primary);
        }

        /* ── Card number ── */
        .vmv-card-number {
          position: absolute;
          top: 18px;
          right: 24px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--color-foreground-subheading);
          opacity: 0.4;
          z-index: 1;
        }

        /* ── Title ── */
        .vmv-title {
          font-size: 22px;
          font-weight: 700;
          color: var(--color-foreground-heading);
          margin-bottom: 14px;
          line-height: 1.2;
        }

        /* ── Body text ── */
        .vmv-body {
          font-size: 15px;
          color: var(--color-foreground-subheading);
          line-height: 1.75;
          flex: 1;
        }

        /* ── Divider ── */
        .vmv-divider {
          width: 36px;
          height: 3px;
          border-radius: 4px;
          background: var(--color-primary);
          margin-bottom: 16px;
          opacity: 0.35;
        }

        /* ── Core values list ── */
        .vmv-values-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 11px;
          width: 100%;
        }

        .vmv-values-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14.5px;
          color: var(--color-foreground-subheading);
          font-weight: 500;
        }

        .vmv-value-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: var(--color-background-subheading);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          flex-shrink: 0;
          transition: background 0.2s ease;
        }
        .vmv-card:hover .vmv-value-icon {
          background: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
        }

        /* ── Grid gap override ── */
        .vmv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .vmv-grid { grid-template-columns: 1fr; }
        }
        @media (min-width: 640px) and (max-width: 1024px) {
          .vmv-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div className={container}>

        {/* Section header */}
        <div className="choose-top">
          <div style={{ textAlign: "center" }} className="choose-us-content section-headings">
            {subheading && <Subheading title={subheading} cls="text-20" aos="fade-up" />}
            {heading && <Heading title={heading} cls="text-50" aos="fade-up" />}
            {text && <Text text={text} cls="text-18" aos="fade-up" />}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-3">
          {promotions && (
            <div className="vmv-grid">
              {promotions.map((item, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={`${index * 120}`}
                  key={`vmv-${index}`}
                  style={{ height: "100%" }}
                >
                  <div className="vmv-card">

                    {/* Card number */}
                    <div className="vmv-card-number">0{index + 1}</div>

                    {/* Icon with dashed ring */}
                    <div className="vmv-icon-ring">
                      <div className="vmv-icon-wrap">
                        {cardIcons[item.title] ?? <FiTarget size={32} />}
                      </div>
                    </div>

                    {/* Title */}
                    <div className="vmv-title">{item.title}</div>

                    {/* Divider */}
                    <div className="vmv-divider" />

                    {/* Body */}
                    {item.title === "Our Core Values" ? (
                      <ul className="vmv-values-list">
                        {coreValues.map((val, vi) => (
                          <li key={vi}>
                            <span className="vmv-value-icon">
                              {valueIcons[vi]}
                            </span>
                            {val}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="vmv-body">{item.text}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsGrid;