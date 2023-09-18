import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BookCard from "@/Components/BookCard";

export default function RelatedBooks({ books }) {
  return (
    <>
      <div className="flex items-center justify-center w-full mt-14">
        <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        <span className="absolute px-8 md:px-16 md:pb-2 font-medium text-lg md:text-2xl text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
          Related Books
        </span>
      </div>

      <div className="w-full mt-4">
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
          {books.length > 0 && (
            <>
              {books.map((book) => (
                <SwiperSlide key={book.id}>
                  <BookCard book={book} />
                </SwiperSlide>
              ))}
            </>
          )}
        </Swiper>
      </div>
    </>
  );
}
