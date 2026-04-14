'use client';

import { SectionProps } from "@/types/sectionProps";
import Subheading from "../Subheading";
import Heading from "../Heading";
import Icons from "../Icons";
import '../.././styles/team.css';

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
            description1:
                "Bhavin Mehta is an international business professional with nearly 25 years of experience across global markets. His expertise spans International Trade, Commodity Markets, Supply Chain Management, Logistics & Warehousing, Retail Distribution, and Risk Management.",
            description2:
                "Over the course of his career, he has established and expanded businesses across Africa, North America, and Asia, building strong supply chains and distribution networks across multiple regions. His vision is to build Kirti Bhavya Enterprises into a trusted global trading and distribution enterprise with strong supply chain capabilities and expanding geographical presence."
        },
        {
            id: 2,
            name: "Anushika Mehta",
            role: "Director, New Initiatives",
            description1:
                "Anushika Mehta brings over a decade of experience in data analysis, market research, domestic and rural marketing, and strategic initiatives. She has worked with reputed organisations, including The Nielsen Company, Britt Worldwide, Cera Sanitaryware, and Cadila Pharmaceuticals.",
            description2:
                "At Kirti Bhavya Enterprises, she leads new initiatives, including technology-driven retail and distribution projects, focusing on building scalable, insight-driven business models and integrating traditional retail networks with modern supply chains."
        }
    ];

    const {
        wrapperCls,
        container,
        subheading,
        heading,
    } = data || {};

    // ✅ helper to bold names + slightly increase font size
    const highlightNames = (text: string, names: string[]) => {
        let result: React.ReactNode[] = [text];

        names.forEach((name) => {
            result = result.flatMap((chunk) => {
                if (typeof chunk !== "string") return chunk;

                return chunk.split(name).reduce((acc: React.ReactNode[], part, i, arr) => {
                    acc.push(part);

                    if (i !== arr.length - 1) {
                        acc.push(
                            <strong
                                key={`${name}-${i}`}
                                style={{
                                    fontSize: "1.10em", // 👈 slightly bigger (your request)
                                    fontWeight: 700,
                                    letterSpacing: "0.2px",
                                }}
                            >
                                {name}
                            </strong>
                        );
                    }

                    return acc;
                }, []);
            });
        });

        return result;
    };

    return (
        <section
            style={{ padding: '0px' }}
            className={`team-section ${wrapperCls || ''}`}
        >
            <div className={container || 'container'}>

                {/* HEADER */}
                <div className="section-headings headings-width text-center">
                    {subheading && (
                        <Subheading
                            title={subheading}
                            cls="text-20"
                            aos="fade-up"
                        />
                    )}

                    {heading && (
                        <Heading
                            title={heading}
                            cls="text-50"
                            aos="fade-up"
                        />
                    )}
                </div>

                {/* GRID */}
                <div className="team-grid">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="team-card radius18"
                            data-aos="fade-up"
                        >
                            {/* HEADER */}
                            <div className="team-card-header">
                                <div className="team-avatar-wrapper">
                                    <div className="team-avatar">
                                        <span>{member.name.charAt(0)}</span>
                                    </div>

                                    <div className="team-info">
                                        <h2 className="team-name">
                                            {member.name}
                                        </h2>
                                        <div className="team-role">
                                            {member.role}
                                        </div>
                                    </div>
                                </div>

                                <div className="team-icon">
                                    <Icons.Awards />
                                </div>
                            </div>

                            {/* DESCRIPTION */}
                            <div className="team-description">
                                <p>
                                    {highlightNames(member.description1, [
                                        "Bhavin Mehta",
                                        "Anushika Mehta",
                                    ])}
                                </p>

                                <p className="team-description-second">
                                    {highlightNames(member.description2, [
                                        "Bhavin Mehta",
                                        "Anushika Mehta",
                                    ])}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TeamSection;