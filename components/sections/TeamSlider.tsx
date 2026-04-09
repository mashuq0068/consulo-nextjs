'use client';

import { SectionProps } from "@/types/sectionProps";
import Subheading from "../Subheading";
import Heading from "../Heading";
import Icons from "../Icons";

const TeamSection = ({
    data
}: {
    data: SectionProps;
}) => {
    const teamMembers = [
        {
            id: 1,
            name: "Bhavin Mehta",
            role: "Founder & Managing Director",
            description1: "Bhavin Mehta is an international business professional with nearly 25 years of experience across global markets. His expertise spans International Trade, Commodity Markets, Supply Chain Management, Logistics & Warehousing, Retail Distribution, and Risk Management.",
            description2: "Over the course of his career, he has established and expanded businesses across Africa, North America, and Asia, building strong supply chains and distribution networks across multiple regions. His vision is to build Kirti Bhavya Enterprises into a trusted global trading and distribution enterprise with strong supply chain capabilities and expanding geographical presence."
        },
        {
            id: 2,
            name: "Anushika Mehta",
            role: "Director, New Initiatives",
            description1: "Anushika Mehta brings over a decade of experience in data analysis, market research, domestic and rural marketing, and strategic initiatives. She has worked with reputed organisations, including Nielsen, Britt Worldwide, Cera Sanitaryware, and Cadila Pharmaceuticals.",
            description2: "At Kirti Bhavya Enterprises, she leads new initiatives, including technology-driven retail and distribution projects, focusing on building scalable, insight-driven business models and integrating traditional retail networks with modern supply chains."
        }
    ];

    const {        
        wrapperCls,
        container,
        subheading,
        heading,
    } = data || {};    

    return (
        <section 
            className={`team-section ${wrapperCls || ''}`}
            style={{
                padding: '50px 0',
                background: '#ffffff'
            }}
        >
            <div className={container || 'container'}>
                <div className="section-headings headings-width text-center">
                    {subheading &&
                        <Subheading 
                            title={subheading}
                            cls="text-20"
                            aos="fade-up"
                        />
                    }

                    {heading &&
                        <Heading 
                            title={heading}
                            cls="text-50"
                            aos="fade-up"
                        />
                    }
                </div>

                <div style={{
                    marginTop: '30px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '30px',
                    maxWidth: '1200px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    padding: '0 20px'
                }}>
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="radius18"
                            style={{
                                background: '#ffffff',
                                border: '1px solid #e8e8e8',
                                padding: '32px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = '#d0d0d0';
                                e.currentTarget.style.background = '#fafafa';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = '#e8e8e8';
                                e.currentTarget.style.background = '#ffffff';
                            }}
                            data-aos="fade-up"
                            data-aos-delay="10"
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                marginBottom: '24px'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    gap: '20px',
                                    alignItems: 'center'
                                }}>
                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        background: '#f5f5f5',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid #e8e8e8'
                                    }}>
                                        <span style={{
                                            fontSize: '32px',
                                            fontWeight: '500',
                                            color: '#1a1a1a'
                                        }}>
                                            {member.name.charAt(0)}
                                        </span>
                                    </div>

                                    <div style={{ flex: 1 }}>
                                        <h2 style={{
                                            fontSize: '22px',
                                            fontWeight: '600',
                                            color: '#1a1a1a',
                                            margin: '0 0 6px 0'
                                        }}>
                                            {member.name}
                                        </h2>
                                        <div style={{
                                            fontSize: '14px',
                                            color: '#666666',
                                            margin: 0
                                        }}>
                                            {member.role}
                                        </div>
                                    </div>
                                </div>

                                <div style={{ flexShrink: 0 }}>
                                    <Icons.Awards />
                                </div>
                            </div>

                            <div>
                                <p style={{
                                    fontSize: '15px',
                                    lineHeight: '1.6',
                                    color: '#444444',
                                    margin: '0 0 16px 0',
                                    textAlign: 'left'
                                }}>
                                    {member.description1}
                                </p>
                                <p style={{
                                    fontSize: '15px',
                                    lineHeight: '1.6',
                                    color: '#444444',
                                    margin: 0,
                                    textAlign: 'left'
                                }}>
                                    {member.description2}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamSection;