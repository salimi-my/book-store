import { debounce } from "lodash";
import { Head, router } from "@inertiajs/react";
import { useCallback, useEffect, useState } from "react";

import BookCard from "@/Components/BookCard";
import MainLayout from "@/Layouts/MainLayout";
import Pagination from "@/Components/Pagination";
import TypeFilter from "@/Pages/Book/Partials/TypeFilter";
import CategoryFilter from "@/Pages/Book/Partials/CategoryFilter";

export default function Index({ filters, categories, books }) {
  const [bookFilter, setBookFilter] = useState({
    filters,
  });

  const handleCheckbox = (e, filterType) => {
    const filter = e.target.value;
    let filterArr = !bookFilter[filterType]
      ? []
      : bookFilter[filterType].split(",");

    if (e.target.checked) {
      if (!filterArr.includes(filter)) {
        filterArr.push(filter);
      }
    } else {
      if (filterArr.includes(filter)) {
        filterArr = filterArr.filter((word) => word !== filter);
      }
    }

    let newBookFilter = bookFilter;
    delete newBookFilter[filterType];

    setBookFilter({
      ...newBookFilter,
      ...(filterArr.length > 0 && {
        [filterType]: filterArr.join(","),
      }),
    });
  };

  const submitFilter = useCallback(
    debounce(
      (bookFilter) =>
        router.get(route("book.index"), bookFilter, {
          preserveState: true,
          preserveScroll: true,
        }),
      500
    ),
    []
  );

  useEffect(() => {
    submitFilter(bookFilter);
  }, [bookFilter]);

  return (
    <MainLayout>
      <Head>
        <title>Books Listing — Book Store</title>
        <meta
          name="description"
          content="Buy books online from the No. 1 Online Bookstore in Malaysia! Enjoy fast & free shipping with min. spend, book deals & exclusive discounts."
        />
      </Head>
      <div className="container max-w-6xl mx-auto my-20 px-4 xl:px-0">
        <div className="flex">
          <div className="hidden md:flex md:flex-col w-[260px] shrink-0 px-4 border-r border-gray-200 dark:border-gray-700">
            <TypeFilter
              handleCheckbox={handleCheckbox}
              bookFilter={bookFilter}
            />
            <CategoryFilter
              handleCheckbox={handleCheckbox}
              bookFilter={bookFilter}
              categories={categories}
            />
          </div>
          <div className="grow px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 md:gap-y-10">
              {books.data.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
            {books.data.length > 0 && (
              <div className="w-full flex justify-center mt-10">
                <Pagination links={books.links} />
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
