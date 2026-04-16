"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Added Autoplay
import "swiper/css";
import "swiper/css/navigation";
import "@/styles/hero-slider.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // React icons import
import Subheading from "../Subheading";
import Heading from "../Heading";
import Text from "../Text";
import PrimaryButton from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import Image from "next/image";
import { HeroSliderType } from "@/types/heroSlider";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Icons from "../Icons";

const HeroSlider = ({ wrapperCls, slides, navigation }: HeroSliderType) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      swiperInstance.params.navigation
    ) {
      // @ts-ignore
      swiperInstance.params.navigation.prevEl = prevRef.current;
      // @ts-ignore
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className={`hero-slider ${wrapperCls || ""}`}>
      <Swiper
        slidesPerView={1}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]} // Include Autoplay module
        onSwiper={setSwiperInstance}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Fixed autoplay config
        pagination={{ clickable: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <div className="slider-card overlay">
              {slide.image && (
                <picture className="slider-media">
                  {slide.imageMobile && (
                    <source
                      media="(max-width: 575px)"
                      srcSet={slide.imageMobile}
                    />
                  )}
                  {slide.imageTablet && (
                    <source
                      media="(max-width: 991px)"
                      srcSet={slide.imageTablet}
                    />
                  )}
                  <Image
                    src={slide.image}
                    width={1920}
                    height={1000}
                    loading="lazy"
                    alt="Hero image"
                  />
                </picture>
              )}

              <div className="slider-content">
                <div className="container height-100 w-full flex items-center">
                  <div className="content-box w-full slider-animation section-headings">
                    {slide.subheading && (
                      <div
                        style={{ backgroundColor: "#14134A", color: "#F5EF78" }}
                        className={`subheading subheading-bg`}
                      >
                        <span className="icon icon-14">
                          <Icons.Subheading />
                        </span>

                        <span>{slide.subheading}</span>

                        <span className="icon icon-14">
                          <Icons.Subheading />
                        </span>
                      </div>
                    )}

                    {Array.isArray(slide.heading) ? (
                      <div style={{marginBottom:'30px', marginTop:'20px'}} className="hero-heading">
                        {slide.heading.map((item, i) => (
                          <div key={i} style={{marginTop:'10px'}}>
                            <Heading
                              title={item as string}
                              cls="text-50 fw-600 "
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <Heading
                        title={slide.heading as string}
                        cls="text-50 fw-600"
                      />
                    )}

                    {slide.text && <Text text={slide.text} cls="text-18" />}

                    {slide.button && (
                      <div className="buttons">
                        {slide.button.type == "primary" ? (
                          <PrimaryButton
                            label={slide.button.label}
                            href={slide.button.href}
                            ariaLabel="Hero button"
                          />
                        ) : (
                          <SecondaryButton
                            label={slide.button.label}
                            href={slide.button.href}
                            ariaLabel="Hero button"
                          />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {navigation && (
        <div className="slider-nav">
          <div
            className="swiper-button-prev"
            ref={prevRef}
            aria-label="Previous slide"
          >
            <GoArrowLeft />
          </div>
          <div
            className="swiper-button-next"
            ref={nextRef}
            aria-label="Next slide"
          >
            <GoArrowRight />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSlider;
