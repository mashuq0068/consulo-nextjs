import type { Metadata } from 'next';
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import Image from "next/image";

const PAGE_TITLE: string = 'Market Insights';

export const metadata: Metadata = {
    title: PAGE_TITLE,
};

const MarketInsights = () => {
    const monitoringPoints = [
        { image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/e9/0f/b2/66/03/v1_E10/E10B99I.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=3abbb2c731db45f01520cba37503be2f0f5e045b27003fccbac601fa8942a4fc", icon: "📈", title: "📈 Global rice and wheat price trends" },
        { image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/f1/b0/6d/37/1b/v1_E10/E10B14Z4.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=13b4c47a6f50af5d68e3906470d86da66cce2bf557838a75e08cf2b8ef5590b1", icon: "🌾", title: "🌾 Crop production and seasonal changes" },
        { image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/73/88/74/2c/cb/v1_E11/E118GDIA.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=9f3e5fffe29649de8e0402dee7011bf1e725a8531dc7f496fb26c2a53be2393b", icon: "📋", title: "📋 Export policies and government regulations" },
        { image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/73/bd/39/83/4c/v1_E10/E104APBR.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=d2595c44e42fa02e523740c46df128c42e660c7e956fc0acfdd357a50a4a1510", icon: "✈️", title: "✈️ Freight and shipping market trends" },
        { image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/11/43/ec/d4/3d/v1_E10/E10J08JT.jpg?w=1600&cf_fit=scale-down&q=85&format=auto&s=e3b966661a405682a6d32e998cf241ed8da5f570c088acdd27896064755618d2", icon: "🌍", title: "🌍 Demand trends in different countries" },
        { image: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/1da902e5-8bb7-4bc2-883f-e253ca487511/ac237032-b223-4705-9f35-14287df4ba59.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=17d5fea155f977e7ebcdc718158641c42c331288be63f4787ea8cf0a1fd69876", icon: "💱", title: "💱 Currency and international trade impact" }
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
                    loading: "eager"
                }}
            />

            {/* STYLE */}
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

                .market-insights-container {
                    padding: 100px 20px;
                    min-height: 100vh;
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
                }

                .monitoring-section {
                    border: 1px solid rgba(0,0,0,0.08);
                    border-radius: 28px;
                    padding: 70px 50px;
                    margin-bottom: 80px;
                    animation: fadeInUp 1s ease-out 0.2s both;
                }

                .monitoring-title {
                    font-size: 32px;
                    font-weight: 700;
                    margin-bottom: 50px;
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .title-accent {
                    width: 5px;
                    height: 40px;
                    background: linear-gradient(180deg, #000, #666);
                    border-radius: 3px;
                }

                .monitoring-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 28px;
                }

                /* ✅ CARD STYLE */
                .monitoring-item {
                    display: flex;
                    flex-direction: column;
                    background: #fff;
                    border-radius: 18px;
                    border: 1px solid rgba(0,0,0,0.06);
                    overflow: hidden;
                    transition: all 0.4s ease;
                    cursor: pointer;
                    animation: slideInLeft 0.6s ease-out both;
                }

                .monitoring-item:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 18px 50px rgba(0,0,0,0.12);
                }

                .item-image {
                    width: 100%;
                    height: 180px;
                    overflow: hidden;
                }

                .card-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .monitoring-item:hover .card-img {
                    transform: scale(1.08);
                }

                .item-text {
                    padding: 16px;
                    font-size: 15px;
                    font-weight: 600;
                    color: #222;
                    line-height: 1.5;
                }

                /* responsive */
                @media (max-width: 768px) {
                    .monitoring-section {
                        padding: 40px 20px;
                    }

                    .monitoring-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>

            <div className="market-insights-container">
                <div className="market-insights-inner">

                    {/* Intro */}
                    <div className="intro-section">
                        <p>
                            At Kirti Bhavya Enterprises, we continuously track global commodity markets,
                            trade policies, logistics trends, and demand-supply movements to help our clients make better buying decisions.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="monitoring-section">
                        <h2 className="monitoring-title">
                            <span className="title-accent"></span>
                            We Regularly Monitor
                        </h2>

                        <div className="monitoring-grid">
                            {monitoringPoints.map((point, idx) => (
                                <div key={idx} className="monitoring-item">
                                    <div className="item-image">
                                        <img
                                            src={point.image}
                                            alt={point.title}
                                            width={600}
                                            height={400}
                                            className="card-img"
                                        />
                                    </div>

                                    <div className="item-text">
                                        {point.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    );
};

export default MarketInsights;