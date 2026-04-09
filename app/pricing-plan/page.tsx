import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';
import { PricingPlan3Data } from '@/data/sections/pricingPlan3Data';
import { WhyChooseUsGridBgData } from '@/data/sections/whyChooseUsGridBgData';
import { Faq2Data } from '@/data/sections/faq2Data';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import PricingPlan from '@/components/sections/PricingPlan';
import WhyChooseUsGrid from '@/components/sections/WhyChooseUsGrid';
import Faq from '@/components/sections/Faq';

const PAGE_TITLE: string = 'Pricing Plan';
export const metadata: Metadata = {
  title: PAGE_TITLE,
}

const PricingPlanPage = () => {
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

            {/* Pricing Plan */}
            <PricingPlan data={PricingPlan3Data} />

            {/* Why Choose Us */}
            <WhyChooseUsGrid data={WhyChooseUsGridBgData} />

            {/* FAQ */}
            <Faq data={Faq2Data} />
        </>
    )
}

export default PricingPlanPage;