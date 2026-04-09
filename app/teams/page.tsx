import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import OurTeam from '@/components/sections/OurTeam';

const PAGE_TITLE: string = 'Our Team';
export const metadata: Metadata = {
  title: PAGE_TITLE,
}

const Team = () => {
    return (
        <>
            {/* Breadcrumb Banner */}
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

            {/* Our Team */}
            <OurTeam 
                wrapperCls="mt-100 mb-100"
                container="container"
            />
        </>
    )
}

export default Team;