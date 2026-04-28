"use client";

import { SectionProps } from "@/types/sectionProps";
import Heading from "../Heading";
import Subheading from "../Subheading";
import Text from "../Text";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/custom-animations/fall-animation.css";
import "react-awesome-slider/dist/custom-animations/fold-out-animation.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

// ╔══════════════════════════════════════════════════════╗
// ║  CHANGE THIS ONE VARIABLE TO SWITCH SLIDE STYLE      ║
// ║   "cubeAnimation"      → 3D cube rotation            ║
// ║   "fallAnimation"      → fall down effect            ║
// ║   "foldOutAnimation"   → fold out                    ║
// ║   "openAnimation"      → open like doors             ║
// ║   "scaleOutAnimation"  → scale out                   ║
// ╚══════════════════════════════════════════════════════╝
const SLIDE_ANIMATION = "cubeAnimation";

const slides = [
  {
    keyword: "Consistency",
    line1: "We deliver",
    line2: "consistency",
    line3: "in every shipment.",
    image:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/c6/87/bd/32/3c/v1_E10/E104AXBZ.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=95d8c2395916b58ddab682c4eff2ab87f0af8ab3ab7647bee64a8932182f7cf5",
  },
  {
    keyword: "Quality",
    line1: "We deliver",
    line2: "quality",
    line3: "in every shipment.",
    image:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/8f/97/17/0a/f3/v1_E10/E10ANKP4.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=7205114ac71d66cc8e4bbfaf32a4a6a383ca6287717825a25fbaec748f037d63",
  },
  {
    keyword: "Transparency",
    line1: "We deliver",
    line2: "transparency",
    line3: "in every shipment.",
    image:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/50/9d/70/4b/fb/v1_E10/E108Q3C5.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=0a42f5e4c750e99833f742604f8e906674919cd5b42b7e2ae408ab62f0d6997d",
  },
  {
    keyword: "Trust",
    line1: "We deliver",
    line2: "trust",
    line3: "in every shipment.",
    image:
      "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/9a/84/98/ee/ee/v1_E10/E109EQCJ.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=6441347cde0a29e95db6596f8e540ee1e55861188c8648e013bdad2d0cd38f32",
  },
];

const WhyChooseUs = ({ data }: { data: SectionProps }) => {
  const { wrapperCls, container, subheading, heading, text } = data || {};

  return (
    <div
      style={{ background: "transparent", padding: "0px" }}
      className={`promotion ${wrapperCls}`}
    >
      <style>{`

        /* ── Slider core ── */
        .aws-btn {
          --slider-height-percentage: 52%;
          --slider-transition-duration: 700ms;
          --loader-bar-color: #14134A;
          --loader-bar-height: 3px;

          /* hide default organic arrows — we replace them */
          --organic-arrow-color: transparent;
          --control-button-background: transparent;
          --control-bullet-color: rgba(255,255,255,0.45);
          --control-bullet-active-color: #ffffff;
        }

        .aws-btn__wrapper,
        .aws-btn__content { border-radius: 16px !important; }

        /* ── Custom visible arrow buttons ── */
        .aws-btn__controls button {
          background: rgba(255,255,255,0.18) !important;
          backdrop-filter: blur(8px) !important;
          -webkit-backdrop-filter: blur(8px) !important;
          border: 1.5px solid rgba(255,255,255,0.4) !important;
          border-radius: 50% !important;
          width: 48px !important;
          height: 48px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: background 0.2s ease !important;
        }
        .aws-btn__controls button:hover {
          background: rgba(255,255,255,0.32) !important;
        }

        /* Replace the invisible organic arrow with a white chevron */
        .aws-btn__controls button span {
          border-color: #ffffff !important;
          border-width: 2.5px !important;
          width: 10px !important;
          height: 10px !important;
        }

        /* ── Slide text layout ── */
        .kbe-slide-inner {
          position: absolute;
          inset: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;

          /* strong dark overlay so text always pops */
          background: rgba(14, 13, 50, 0.62);
        }

        .kbe-slide-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          padding: 0 24px;
          max-width: 680px;
        }

        .kbe-slide-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          margin-bottom: 20px;
        }

        .kbe-slide-line1 {
          font-size: clamp(18px, 2.5vw, 26px);
          font-weight: 400;
          color: rgba(255,255,255,0.80);
          line-height: 1;
          margin-bottom: 6px;
        }

        .kbe-slide-line2 {
          font-size: clamp(48px, 7.5vw, 96px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          letter-spacing: -2px;
          text-transform: capitalize;
          margin-bottom: 10px;

          /* subtle text shadow for extra lift */
          text-shadow: 0 4px 32px rgba(0,0,0,0.45);
        }

        .kbe-slide-line3 {
          font-size: clamp(16px, 2vw, 22px);
          font-weight: 400;
          color: rgba(255,255,255,0.65);
          line-height: 1;
          margin-bottom: 32px;
          letter-spacing: 0.5px;
        }

        .kbe-slide-divider {
          width: 48px;
          height: 3px;
          background: #ffffff;
          border-radius: 4px;
          opacity: 0.5;
        }
          .awssld__controls__arrow-left:before {
            background-color: white !important;
            }
          .awssld__controls__arrow-left:after {
            background-color: white !important;
            }
          .awssld__controls__arrow-right:before {
            background-color: white !important;
            }
          .awssld__controls__arrow-right:after {
            background-color: white !important;
            }
      `}</style>

      <div className={container}>
        {/* Section Header */}
        <div className="promotion-container">
          <div className="grid grid-cols-12 lg:gap-1">
            <div className="lg:col-span-12 col-span-12">
              <div
                style={{ textAlign: "center" }}
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
          </div>
        </div>

        {/* Slider */}
        <div
          style={{
            marginTop: "50px",
            borderRadius: "16px",
            overflow: "hidden",
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <AutoplaySlider
            animation={SLIDE_ANIMATION}
            play={true}
            interval={4000}
            bullets={true}
            organicArrows={true}
            infinite={true}
            mobileTouch={true}
          >
            {slides.map((slide, i) => (
              <div key={i} style={{ width: "100%", height: "100%" }}>
                {/* BG image */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 0,
                  }}
                />

                {/* Centered clean text */}
                <div className="kbe-slide-inner">
                  <div className="kbe-slide-box">
                    <div className="kbe-slide-line1">{slide.line1}</div>
                    <div className="kbe-slide-line2">{slide.line2}</div>
                    <div className="kbe-slide-line3">{slide.line3}</div>
                    <div className="kbe-slide-divider" />
                  </div>
                </div>
              </div>
            ))}
          </AutoplaySlider>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
