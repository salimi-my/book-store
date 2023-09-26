import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function LandingBanner() {
  return (
    <div className="w-full mt-8">
      <Swiper
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="rounded-lg mb-5 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
      >
        <SwiperSlide>
          <div className="relative">
            <div className="absolute w-full h-full grid grid-cols-2 justify-start items-center text-gray-900 dark:text-white pb-5 md:pb-10">
              <div className="flex flex-col items-center">
                <p className="uppercase font-medium text-xs md:text-base pb-1 md:pb-2">
                  BOOK STORE
                </p>
                <p className="uppercase font-bold text-xs md:text-lg leading-none">
                  FIND YOUR FAVOURITE
                </p>
                <p className="uppercase font-bold text-2xl md:text-4xl leading-none">
                  BOOK HERE
                </p>
              </div>
            </div>
            <img alt="book store banner 1" src="/landing-banner-1.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute w-full h-full grid grid-cols-2 justify-center items-center text-gray-900 dark:text-white pb-5 md:pb-10">
              <div></div>
              <div className="flex flex-col items-center">
                <p className="uppercase font-medium text-xs md:text-base pb-1 md:pb-2">
                  BOOK STORE
                </p>
                <p className="uppercase font-bold text-xs md:text-lg leading-none">
                  FIND YOUR FAVOURITE
                </p>
                <p className="uppercase font-bold text-2xl md:text-4xl leading-none">
                  BOOK HERE
                </p>
              </div>
            </div>
            <img alt="book store banner 2" src="/landing-banner-2.png" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute w-full h-full flex justify-center items-center text-gray-900 dark:text-white pb-5 md:pb-10">
              <div className="flex flex-col items-center">
                <p className="uppercase font-medium text-xs md:text-base pb-1 md:pb-2">
                  BOOK STORE
                </p>
                <p className="uppercase font-bold text-xs md:text-lg leading-none">
                  FIND YOUR FAVOURITE
                </p>
                <p className="uppercase font-bold text-2xl md:text-4xl leading-none">
                  BOOK HERE
                </p>
              </div>
            </div>
            <img alt="book store banner 2" src="/landing-banner-3.png" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
