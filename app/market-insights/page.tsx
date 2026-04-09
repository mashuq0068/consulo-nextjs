import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import BlogGrid from '@/components/sections/BlogGrid';

const PAGE_TITLE: string = 'Market Insights';
export const metadata: Metadata = {
  title: PAGE_TITLE,
}

const MarketInsights = () => {
    const monitoringPoints = [
        { icon: "📈", title: "Global rice and wheat price trends" },
        { icon: "🌾", title: "Crop production and seasonal changes" },
        { icon: "📋", title: "Export policies and government regulations" },
        { icon: "✈️", title: "Freight and shipping market trends" },
        { icon: "🌍", title: "Demand trends in different countries" },
        { icon: "💱", title: "Currency and international trade impact" }
    ];

    return (
        <>
            <BreadcrumbBanner 
                title={PAGE_TITLE}
                image={{
                    src: "/img/banner/about-banner.jpg",
                    srcMobile: "/img/banner/about-banner.jpg",
                    srcTablet: "/img/banner/about-banner.jpg",
                    width: 1920,
                    height: 520,
                    cls: "media media-bg",
                    alt: "Banner Image",
                    loading: "eager"
                }}
            />

            {/* Market Insights Content - Premium Fresh Design */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');
                
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

                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                }

                @keyframes gradientShift {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                .market-insights-container {
                    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
                    padding: 100px 20px;
                    min-height: 100vh;
                    font-family: 'Poppins', sans-serif;
                }

                .market-insights-inner {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .intro-section {
                    max-width: 900px;
                    margin: 0 auto 80px auto;
                    text-align: center;
                    animation: fadeInUp 0.8s ease-out;
                }

                .intro-section p {
                    font-size: 20px;
                    line-height: 1.8;
                    color: #1a1a1a;
                    font-weight: 400;
                    margin: 0;
                    letter-spacing: -0.2px;
                }

                .monitoring-section {
                    background: linear-gradient(135deg, #ffffff 0%, #fafbfc 100%);
                    border: 1px solid rgba(0, 0, 0, 0.08);
                    border-radius: 28px;
                    padding: 70px 50px;
                    margin-bottom: 80px;
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
                    animation: fadeInUp 1s ease-out 0.2s both;
                }

                .monitoring-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 32px;
                    font-weight: 700;
                    color: #000;
                    margin-bottom: 50px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    letter-spacing: -0.5px;
                }

                .title-accent {
                    width: 5px;
                    height: 40px;
                    background: linear-gradient(180deg, #000 0%, #666 100%);
                    border-radius: 3px;
                }

                .monitoring-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 32px;
                    grid-auto-rows: auto;
                }

                .monitoring-item {
                    display: flex;
                    gap: 18px;
                    padding: 24px;
                    background: #fff;
                    border-radius: 16px;
                    border: 1px solid rgba(0, 0, 0, 0.06);
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    cursor: pointer;
                    animation: slideInLeft 0.6s ease-out both;
                }

                .monitoring-item:nth-child(1) { animation-delay: 0.3s; }
                .monitoring-item:nth-child(2) { animation-delay: 0.4s; }
                .monitoring-item:nth-child(3) { animation-delay: 0.5s; }
                .monitoring-item:nth-child(4) { animation-delay: 0.6s; }
                .monitoring-item:nth-child(5) { animation-delay: 0.7s; }
                .monitoring-item:nth-child(6) { animation-delay: 0.8s; }

                .monitoring-item:hover {
                    transform: translateY(-8px);
                    background: linear-gradient(135deg, #f5f5f5 0%, #fff 100%);
                    border-color: rgba(0, 0, 0, 0.12);
                    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1);
                }

                .item-icon {
                    font-size: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 50px;
                    height: 50px;
                    transition: transform 0.4s ease;
                }

                .monitoring-item:hover .item-icon {
                    transform: scale(1.2) rotate(5deg);
                }

                .item-text {
                    font-size: 16px;
                    font-weight: 500;
                    color: #333;
                    line-height: 1.6;
                    display: flex;
                    align-items: center;
                }

                .quote-section {
                    max-width: 950px;
                    margin: 0 auto;
                    text-align: center;
                    padding: 80px 60px;
                    background: #ffffff;
                    border: 1px solid rgba(0, 0, 0, 0.08);
                    border-radius: 18px;
                    position: relative;
                    animation: fadeInUp 1.2s ease-out 0.4s both;
                    // box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
                    overflow: hidden;
                }

                .quote-section::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    background: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.1) 50%, transparent 100%);
                }

                .quote-mark-open {
                    font-size: 52px;
                    color: rgba(0, 0, 0, 0.06);
                    line-height: 0.7;
                    font-family: 'Playfair Display', serif;
                    margin-bottom: 12px;
                    font-weight: 700;
                    font-style: italic;
                }

                .quote-text {
                    font-family: 'Playfair Display', serif;
                    font-size: 30px;
                    font-weight: 500;
                    color: #1a1a1a;
                    line-height: 1.95;
                    margin: 0;
                    letter-spacing: -0.5px;
                    font-style: italic;
                    position: relative;
                    padding: 0 20px;
                }

                .quote-divider {
                    width: 50px;
                    height: 1.5px;
                    background: rgba(0, 0, 0, 0.25);
                    margin: 40px auto 0;
                    border-radius: 1px;
                }

                @media (max-width: 768px) {
                    .market-insights-container {
                        padding: 60px 16px;
                    }

                    .monitoring-section {
                        padding: 40px 24px;
                        margin-bottom: 50px;
                    }

                    .monitoring-title {
                        font-size: 24px;
                        margin-bottom: 32px;
                    }

                    .monitoring-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }

                    .intro-section p {
                        font-size: 18px;
                        line-height: 1.7;
                    }

                    .quote-text {
                        font-size: 20px;
                    }

                    .quote-section {
                        padding: 40px 24px;
                    }
                }
            `}</style>

            <div className="market-insights-container">
                <div className="market-insights-inner">
                    {/* Intro Section */}
                    <div className="intro-section">
                        <p>
                            At Kirti Bhavya Enterprises, we continuously track global commodity markets, trade policies, 
                            logistics trends, and demand-supply movements to help our clients make better buying decisions.
                        </p>
                    </div>

                    {/* Monitoring Section */}
                    <div className="monitoring-section">
                        <h2 className="monitoring-title">
                            <span className="title-accent"></span>
                            We Regularly Monitor
                        </h2>

                        <div className="monitoring-grid">
                            {monitoringPoints.map((point, idx) => (
                                <div key={idx} className="monitoring-item">
                                    <div className="item-icon">{point.icon}</div>
                                    <div className="item-text">{point.title}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Premium Quote Section */}
                    <div className="quote-section">
                        <div className="quote-mark-open">"</div>
                        <p className="quote-text">
                            By sharing market knowledge and updates, we help our customers plan purchases better 
                            and build long-term, stable business relationships.
                        </p>
                        <div className="quote-divider"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MarketInsights;