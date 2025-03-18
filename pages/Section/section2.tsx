import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import sliderimg1 from "../images/sliderimg1.png";
import sliderimg2 from "../images/sliderimg2.png";
import sliderimg3 from "../images/sliderimg3.png";
import Image from "next/image";
export default function Section2() {
  return (
    <div>
      <Swiper
        effect="coverflow" // Try 'fade', 'slide', 'flip'
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={0}
        // pagination={{ clickable: true ,}}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background: ${
              index === 0 ? "yellow" : "gray"
            }; width: 12px; height: 12px; margin: 5px;"></span>`;
          },
        }}
        navigation={true}
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        className="mySwiper flex"
      >
        <SwiperSlide>
          <div className="slide">
            <Image
              alt="My Image"
              src={sliderimg2}
              className="w-full  absolute"
            />
            <div className="flex flex-col justify-center items-center h-200 relative">
              <h1 className="text-white  text-6xl font-bold">
                Welcome to our Bakery
              </h1>
              <p className="text-white text-2xl  font-serif mt-10">
                freshly baked goods,every day!
              </p>
              <button className="bg-[#D6A21A] text-amber-50 font-bold mt-12 p-2 rounded-sm cursor-pointer">
                Explor Menu
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <Image
              alt="My Image"
              src={sliderimg2}
              className="w-full absolute"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image alt="My Image" src={sliderimg3} className="w-full absolute" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
