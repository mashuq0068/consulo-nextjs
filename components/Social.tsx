import Icons from "./Icons";
import Link from "next/link";

interface SocialProps {
    wrapperCls: string;
    aos?: string;
    aosAnchor?: string;
}


const menuSocial = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61585380045467",
        icon: <Icons.FaceBook />
    },
    {
        label: "Linkedin",
        href: "https://www.linkedin.com/company/110299950/admin/dashboard/",
        icon: <Icons.LinkedIn />
    },
    // {
    //     label: "Twitter",
    //     href: "https://x.com/",
    //     icon: <Icons.Twitter />
    // },
    {
        label: "Instagram",
        href: "https://www.instagram.com/kirtibhavya.enterprises/?hl=en",
        icon: <Icons.Instagram />
    }
]

const Social = ({
    wrapperCls,
    aos,
    aosAnchor
}: SocialProps) => {
    const isAos = aos ? { 'data-aos': `${aos}` } : null;
    const isAosAnchor = aosAnchor ? { 'data-aos-anchor': `${aosAnchor}` } : null;
    const conditionalAttributes = {...isAos, ...isAosAnchor}

    return (
        <ul className={`${wrapperCls} list-unstyled`} {...conditionalAttributes}>
            {menuSocial.map((item, index) => (
                <li key={`social-${index}`}>
                    <Link
                        className="social-link text"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.icon}
                        <span className="visually-hidden">{item.label}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Social;