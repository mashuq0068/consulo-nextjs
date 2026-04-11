"use client";

import React from "react";

const ParallaxScroll = ({ children }: { children: React.ReactNode }) => {
    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                backgroundImage:
                    "url(https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/0f/96/9f/a9/48/v1_E10/E1027ZET.jpg?w=800&cf_fit=scale-down&q=85&format=auto&s=18f97e74c47d2cf6adee4d2942a595d5f70df2e6db13d95b67f96246fc4f0894)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
                overflow: "hidden",
            }}
        >
            {/* overlay */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(135deg, rgba(255,242,214,0.57) 0%, rgba(215,143,71,0.50) 100%)",
                    zIndex: 1,
                }}
            />

            {/* content */}
            <div style={{ position: "relative", zIndex: 2 }}>
                {children}
            </div>
        </div>
    );
};

export default ParallaxScroll;