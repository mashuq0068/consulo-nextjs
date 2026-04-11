/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import WhyChooseUsImage from "@/public/img/why-choose-us/bg.jpg";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import Link from "next/link";

const PAGE_TITLE: string = "HR at Kirti Bhavya";
export const metadata: Metadata = {
  title: PAGE_TITLE,
};

const HR = () => {
  const hrSections = [
    {
      id: 1,
      slug: "life-at-kb",
      title: "Life at KBEPL",
      icon: "🌟",
      description:
        "Life at KBEPL is professional, dynamic, and learning-focused. Employees gain practical exposure to international trade, exports, logistics, and global markets while working in a collaborative and growth-oriented environment.",
      highlights: [
        "Professional & Dynamic Work Environment",
        "Learning-Focused Culture",
        "International Trade Exposure",
        "Collaborative Team Work",
      ],
    },
    {
      id: 2,
      slug: "careers",
      title: "Career Opportunities",
      icon: "💼",
      description:
        "We offer diverse career opportunities for talented professionals looking to build long-term careers in the export business.",
      highlights: [
        "International Business & Sales",
        "Export Documentation",
        "Logistics & Supply Chain",
        "Accounts & Finance",
        "Marketing & Operations",
      ],
    },
    {
      id: 3,
      slug: "training",
      title: "Training Programs",
      icon: "📚",
      description:
        "We provide comprehensive practical training to equip our team with industry expertise and international best practices.",
      highlights: [
        "Export Documentation",
        "International Trade Process",
        "Logistics & Shipment Planning",
        "Product Knowledge",
        "Client Communication",
      ],
    },
    {
      id: 4,
      slug: "internship",
      title: "Internship Opportunities",
      icon: "🎓",
      description:
        "We offer valuable internship opportunities for students and fresh graduates seeking practical exposure in the export business.",
      highlights: [
        "Export Business Experience",
        "Documentation Training",
        "Marketing & Research",
        "Operations Exposure",
        "Mentorship Programs",
      ],
    },
  ];

  return (
    <>
      <BreadcrumbBanner
        title={PAGE_TITLE}
        image={{
          src: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/4c/6d/06/e4/6e/v1_E10/E105KAMW.jpeg?w=800&cf_fit=scale-down&q=85&format=auto&s=6b21082564fd7c6affb308f5af1d59c8362d37d04ba811a190989e05d7e301bb",
          srcMobile: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/4c/6d/06/e4/6e/v1_E10/E105KAMW.jpeg?w=800&cf_fit=scale-down&q=85&format=auto&s=6b21082564fd7c6affb308f5af1d59c8362d37d04ba811a190989e05d7e301bb",
          srcTablet: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/4c/6d/06/e4/6e/v1_E10/E105KAMW.jpeg?w=800&cf_fit=scale-down&q=85&format=auto&s=6b21082564fd7c6affb308f5af1d59c8362d37d04ba811a190989e05d7e301bb",
          width: 1920,
          height: 520,
          cls: "media media-bg",
          alt: "Banner Image",
          loading: "eager",
        }}
      />

      {/* HR Content - Premium Design */}
      <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .hr-container {
                    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
                    padding: 80px 20px;
                    width: 100%;
                    box-sizing: border-box;
                }

                .hr-inner {
                    max-width: 1200px;
                    margin: 0 auto;
                    width: 100%;
                    padding: 0 20px;
                    box-sizing: border-box;
                }

                .hr-intro-section {
                    max-width: 900px;
                    margin: 0 auto 80px auto;
                    text-align: center;
                    animation: fadeInUp 0.8s ease-out;
                    padding: 0 15px;
                    box-sizing: border-box;
                }

                .hr-intro-title {
                    font-size: 42px;
                    font-weight: 700;
                    color: #000;
                    margin-bottom: 24px;
                    letter-spacing: -0.6px;
                }

                .hr-intro-text {
                    font-size: 18px;
                    line-height: 1.8;
                    color: #555;
                    font-weight: 400;
                    margin: 0;
                    letter-spacing: -0.2px;
                }

                .hr-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 32px;
                    margin-bottom: 0;
                    width: 100%;
                    box-sizing: border-box;
                }

                .hr-card {
                    background: #ffffff;
                    border: 1px solid rgba(0, 0, 0, 0.08);
                    border-radius: 20px;
                    padding: 48px 36px;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    cursor: pointer;
                    animation: fadeInUp 0.8s ease-out both;
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    box-sizing: border-box;
                }

                .hr-card:nth-child(1) { animation-delay: 0.2s; }
                .hr-card:nth-child(2) { animation-delay: 0.3s; }
                .hr-card:nth-child(3) { animation-delay: 0.4s; }
                .hr-card:nth-child(4) { animation-delay: 0.5s; }

                .hr-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, #000 0%, #666 100%);
                    opacity: 0;
                    transition: opacity 0.4s ease;
                }

                .hr-card:hover {
                    transform: translateY(-12px);
                    box-shadow: 0 20px 48px rgba(0, 0, 0, 0.12);
                    border-color: rgba(0, 0, 0, 0.12);
                }

                .hr-card:hover::before {
                    opacity: 1;
                }

                .hr-card-icon {
                    font-size: 48px;
                    margin-bottom: 20px;
                    display: block;
                    transition: transform 0.4s ease;
                }

                .hr-card:hover .hr-card-icon {
                    transform: scale(1.15) rotate(-5deg);
                }

                .hr-card-title {
                    font-size: 26px;
                    font-weight: 700;
                    color: #000;
                    margin-bottom: 16px;
                    letter-spacing: -0.3px;
                }

                .hr-card-description {
                    font-size: 15px;
                    line-height: 1.7;
                    color: #666;
                    margin-bottom: 28px;
                    font-weight: 400;
                }

                .hr-highlights {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    flex-grow: 1;
                }

                .hr-highlight-item {
                    font-size: 14px;
                    color: #555;
                    padding: 10px 0;
                    padding-left: 20px;
                    position: relative;
                    line-height: 1.6;
                    font-weight: 500;
                    transition: all 0.3s ease;
                }

                .hr-highlight-item::before {
                    content: '→';
                    position: absolute;
                    left: 0;
                    color: #000;
                    font-weight: 700;
                    transition: transform 0.3s ease;
                }

                .hr-card:hover .hr-highlight-item::before {
                    transform: translateX(4px);
                }

                .hr-card:hover .hr-highlight-item {
                    color: #000;
                }

                /* Full Width CTA Section */
                .hr-cta-wrapper {
                    width: 100%;
                   
                    background-image: url(${WhyChooseUsImage.src});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: scroll;
                    box-sizing: border-box;
                    overflow: hidden;
                }

                .hr-cta-section {
                    width: 100%;
                    text-align: center;
                    padding: 120px 40px;
                    position: relative;
                    animation: fadeInUp 1.2s ease-out 0.6s both;
                    box-sizing: border-box;
                    max-width: 100%;
                }

                .hr-cta-content {
                    position: relative;
                    z-index: 1;
                    max-width: 900px;
                    margin: 0 auto;
                    width: 100%;
                    padding: 0 20px;
                    box-sizing: border-box;
                }

                .hr-cta-title {
                    font-size: 42px;
                    font-weight: 700;
                    color: #000;
                    margin-bottom: 20px;
                    letter-spacing: -0.6px;
                }

                .hr-cta-text {
                    font-size: 18px;
                    line-height: 1.8;
                    color: #555;
                    margin-bottom: 32px;
                    font-weight: 400;
                }

                .hr-cta-contact {
                    font-size: 16px;
                    color: #000;
                    font-weight: 600;
                    letter-spacing: -0.2px;
                    margin-bottom: 20px;
                }

                /* Wrapper for primary button to center it */
                .hr-cta-content :global(.button) {
                    margin-top: 16px;
                }

                @media (max-width: 1024px) {
                    .hr-card {
                        padding: 40px 28px;
                    }

                    .hr-cta-title {
                        font-size: 36px;
                    }
                }

                @media (max-width: 768px) {
                    .hr-container {
                        padding: 60px 16px;
                    }

                    .hr-inner {
                        padding: 0 16px;
                    }

                    .hr-intro-section {
                        margin-bottom: 60px;
                        padding: 0 12px;
                    }

                    .hr-intro-title {
                        font-size: 32px;
                        margin-bottom: 16px;
                    }

                    .hr-intro-text {
                        font-size: 16px;
                        line-height: 1.6;
                    }

                    .hr-grid {
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }

                    .hr-card {
                        padding: 32px 20px;
                    }

                    .hr-card-icon {
                        font-size: 40px;
                        margin-bottom: 16px;
                    }

                    .hr-card-title {
                        font-size: 20px;
                        margin-bottom: 12px;
                    }

                    .hr-card-description {
                        font-size: 14px;
                        margin-bottom: 20px;
                    }

                    .hr-highlight-item {
                        font-size: 13px;
                        padding: 8px 0;
                        padding-left: 18px;
                    }

                    .hr-cta-wrapper {
                        margin-top: 60px;
                        background-attachment: scroll;
                    }

                    .hr-cta-section {
                        padding: 80px 20px;
                    }

                    .hr-cta-content {
                        padding: 0 16px;
                    }

                    .hr-cta-title {
                        font-size: 28px;
                        margin-bottom: 16px;
                    }

                    .hr-cta-text {
                        font-size: 16px;
                        margin-bottom: 24px;
                    }

                    .hr-cta-contact {
                        font-size: 15px;
                        margin-bottom: 16px;
                    }
                }

                @media (max-width: 480px) {
                    .hr-container {
                        padding: 50px 16px;
                    }

                    .hr-intro-title {
                        font-size: 26px;
                    }

                    .hr-intro-text {
                        font-size: 15px;
                    }

                    .hr-grid {
                        gap: 16px;
                    }

                    .hr-card {
                        padding: 24px 16px;
                    }

                    .hr-card-icon {
                        font-size: 36px;
                    }

                    .hr-card-title {
                        font-size: 18px;
                    }

                    .hr-cta-title {
                        font-size: 24px;
                    }

                    .hr-cta-section {
                        padding: 60px 16px;
                    }
                }
            `}</style>

      <div className="hr-container">
        <div className="hr-inner">
          {/* Intro Section */}
          <div className="hr-intro-section">
            <h1 className="hr-intro-title">HR at Kirti Bhavya Enterprises</h1>
            <p className="hr-intro-text">
              At Kirti Bhavya Enterprises, we believe that people are our
              biggest strength. We focus on creating a professional, positive,
              and growth-oriented work environment where employees can learn,
              grow, and build long-term careers.
            </p>
          </div>

          {/* HR Cards Grid */}
          <div className="hr-grid">
            {hrSections.map((section, idx) => (
              <div key={idx} className="hr-card">
                <span className="hr-card-icon">{section.icon}</span>
                <h2 className="hr-card-title">{section.title}</h2>
                <p className="hr-card-description">{section.description}</p>
                <ul className="hr-highlights">
                  {section.highlights.map((highlight, highlightIdx) => (
                    <li key={highlightIdx} className="hr-highlight-item">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full Width CTA Section */}
      <div className="hr-cta-wrapper">
        <div className="hr-cta-section">
          <div className="hr-cta-content">
            <h2 className="hr-cta-title">Ready to Join Our Team?</h2>
            <p className="hr-cta-text">
              We're always looking for talented individuals who share our
              passion for excellence and commitment to growth.
            </p>
            <p className="hr-cta-contact">
              For careers and internships, contact us
            </p>
            <PrimaryButton
              label="Get in Touch"
              href="/contact-us"
              ariaLabel="Contact HR for careers and internships"
            />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default HR;