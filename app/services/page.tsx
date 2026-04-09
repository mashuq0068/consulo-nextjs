import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';
import { PricingPlan2Data } from '@/data/sections/pricingPlan2Data';
import { TeamSlider2Data } from '@/data/sections/teamSlider2Data';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import Services from '@/components/sections/Services';
import PricingPlan from '@/components/sections/PricingPlan';
import TeamSlider from '@/components/sections/TeamSlider';

const PAGE_TITLE: string = 'Our Products/Services';
export const metadata: Metadata = {
  title: PAGE_TITLE,
}

const PageServices = () => {
    return(
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

            {/* Service Cards */}
           <div style={{marginBottom:'100px'}}>
             <Services
                wrapperCls="mt-100"
                container="container"
            />
           </div>

            
        </>
    )
}

export default PageServices;