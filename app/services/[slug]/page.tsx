import type { Metadata } from 'next';
import BreadcrumbBannerImage from '@/public/img/banner/page-banner.jpg';
import BreadcrumbBannerImageTablet from '@/public/img/banner/page-banner-991.jpg';
import BreadcrumbBannerImageMobile from '@/public/img/banner/page-banner-575.jpg';
import ServiceList from '@/data/services.json';
import { ServiceProps } from '@/types/service';
import { notFound } from 'next/navigation';

import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import ServiceDetails from '@/components/sections/ServiceDetails';

const PAGE_TITLE: string = 'Service Details';
export const metadata: Metadata = {
  title: PAGE_TITLE,
}

const Page = async ({ params }: {params: Promise<{slug: string}>}) => {
    const { slug } = await params;
    const serviceList = ServiceList;

    const service = serviceList.find(
        (service) => service.slug === slug
    ) as ServiceProps | undefined;

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
            {service ? (
              <ServiceDetails container="container" data={service} />
            ) : (
              notFound()
            )}
        </>
    )
}

export default Page;