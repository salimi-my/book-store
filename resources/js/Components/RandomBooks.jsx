import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BookCard from "@/Components/BookCard";

export default function RandomBooks({ books }) {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <h2 className="font-medium text-2xl text-gray-900 dark:text-white">
          Featured Books
        </h2>
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
