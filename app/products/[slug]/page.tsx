import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BreadcrumbBanner from "@/components/BreadcrumbBanner";
import ProductDetail from '@/components/sections/ProductDetail';
import products from '@/data/products';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  return {
    title: product ? `${product.title} — Products & Services` : 'Product Details',
    description: product?.description ?? '',
  };
}

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <>
      <BreadcrumbBanner
        title={product.title}
        image={{
          src: product?.heroImage,
          srcMobile: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/4c/6d/06/e4/6e/v1_E10/E105KAMW.jpeg?w=800&cf_fit=scale-down&q=85&format=auto&s=6b21082564fd7c6affb308f5af1d59c8362d37d04ba811a190989e05d7e301bb",
          srcTablet: "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/4c/6d/06/e4/6e/v1_E10/E105KAMW.jpeg?w=800&cf_fit=scale-down&q=85&format=auto&s=6b21082564fd7c6affb308f5af1d59c8362d37d04ba811a190989e05d7e301bb",
          width: 1920,
          height: 520,
          cls: "media media-bg",
          alt: `${product.title} Banner`,
          loading: "eager",
        }}
      />
      <ProductDetail data={product} />
    </>
  );
};

export default ProductPage;
