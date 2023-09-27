import { Book } from "lucide-react";
import { Link } from "@inertiajs/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CategorySwiper() {
  return (
    <div className="flex flex-col mt-10">
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-2xl">Collections</h2>
        <Link
          href={route("book.index")}
          className="underline hover:opacity-80 text-gray-900 dark:text-white font-medium text-xl"
        >
          View all
        </Link>
      </div>

      <div className="w-full pt-6">
        <Swiper
          spaceBetween={5}
          slidesPerView={2}
          slidesPerGroup={2}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: {
              spaceBetween: 10,
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1024: {
              spaceBetween: 20,
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            1440: {
              spaceBetween: 10,
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
          }}
          modules={[Navigation, Pagination]}
          className="rounded-lg mb-5"
        >
          <SwiperSlide>
            <Link
              href={route("book.index", { type: "fiction" })}
              className="flex flex-col items-center hover:scale-105 ease-in-out duration-300"
            >
              <Book className="w-20 h-20 text-cyan-700" />
              <p className="font-medium text-lg pt-2">Fiction</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={route("book.index", { type: "non-fiction" })}
              className="flex flex-col items-center hover:scale-105 ease-in-out duration-300"
            >
              <Book className="w-20 h-20 text-cyan-700" />
              <p className="font-medium text-lg pt-2">Non-Fiction</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={route("book.index", { category: "Fantasy" })}
              className="flex flex-col items-center hover:scale-105 ease-in-out duration-300"
            >
              <Book className="w-20 h-20 text-cyan-700" />
              <p className="font-medium text-lg pt-2">Fantasy</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={route("book.index", { category: "Romance" })}
              className="flex flex-col items-center hover:scale-105 ease-in-out duration-300"
            >
              <Book className="w-20 h-20 text-cyan-700" />
              <p className="font-medium text-lg pt-2">Romance</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={route("book.index", { category: "Literature" })}
              className="flex flex-col items-center hover:scale-105 ease-in-out duration-300"
            >
              <Book className="w-20 h-20 text-cyan-700" />
              <p className="font-medium text-lg pt-2">Literature</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={route("book.index", { category: "Economics" })}
              className="flex flex-col items-center hover:scale-105 ease-in-out duration-300"
            >
              <Book className="w-20 h-20 text-cyan-700" />
              <p className="font-medium text-lg pt-2">Economics</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={route("book.index", { category: "Crime & Thriller" })}
              className="flex flex-col items-center hover:scale-105 ease-in-out duration-300"
            >
              <Book className="w-20 h-20 text-cyan-700" />
              <p className="font-medium text-lg pt-2">Crime</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={route("book.index", { category: "Inspirational" })}
              className="flex flex-col items-center hover:scale-105 ease-in-out duration-300"
            >
              <Book className="w-20 h-20 text-cyan-700" />
              <p className="font-medium text-lg pt-2">Inspirational</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={route("book.index", { category: "Horror & Paranormal" })}
              className="flex flex-col items-center hover:scale-105 ease-in-out duration-300"
            >
              <Book className="w-20 h-20 text-cyan-700" />
              <p className="font-medium text-lg pt-2">Horror</p>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link
              href={route("book.index", { category: "Sports & Hobbies" })}
              className="flex flex-col items-center hover:scale-105 ease-in-out duration-300"
            >
              <Book className="w-20 h-20 text-cyan-700" />
              <p className="font-medium text-lg pt-2">Sports</p>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
