import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';

import { ImageTextData } from '@/data/sections/imageTextData';
import { ScrollingTextData } from '@/data/sections/scrollingTextData';
import { WhyChooseUsGridBgData } from '@/data/sections/whyChooseUsGridBgData';
import { TeamSliderData } from '@/data/sections/teamSliderData';
import { TestimonialData } from '@/data/sections/testimonialData';
import { Faq2Data } from '@/data/sections/faq2Data';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import ImageText from '@/components/sections/ImageText';
import ScrollingText from '@/components/sections/ScrollingText';
import WhyChooseUsGrid from '@/components/sections/WhyChooseUsGrid';
import TeamSlider from '@/components/sections/TeamSlider';
import Testimonials from '@/components/sections/Testimonials';
import Faq from '@/components/sections/Faq';
import AboutUs from '@/components/sections/AboutUs';
import Certifications from '@/components/sections/Certifications';
import { CertificationsData } from '@/data/sections/certificationsData';


const PAGE_TITLE: string = 'About Us';
export const metadata: Metadata = {
  title: PAGE_TITLE,
}


const About = () => {
    return(
        <>
            {/* Breadcrumb Banner */}
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

            {/* Image Text */}
            <AboutUs button={false} />

            {/* Scrolling Text */}
            {/* <ScrollingText data={ScrollingTextData} /> */}

            {/* Why Choose Us */}
            <WhyChooseUsGrid data={WhyChooseUsGridBgData} />

            {/* Our Team */}
            <TeamSlider 
                data={TeamSliderData} 
                // pagination={true}
            />
            <Certifications data={CertificationsData}/>

            {/* Testimonials */}
            {/* <Testimonials data={TestimonialData} /> */}

            {/* FAQ */}
            {/* <Faq data={Faq2Data} /> */}
        </>
    )
}

export default About;
