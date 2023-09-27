import { debounce } from "lodash";
import { Head, router } from "@inertiajs/react";
import { useCallback, useEffect, useRef, useState } from "react";

import BookCard from "@/Components/BookCard";
import MainLayout from "@/Layouts/MainLayout";
import Pagination from "@/Components/Pagination";
import BookBanner from "@/Components/BookBanner";
import SortBy from "@/Pages/Book/Partials/SortBy";
import TypeFilter from "@/Pages/Book/Partials/TypeFilter";
import PriceFilter from "@/Pages/Book/Partials/PriceFilter";
import ClearFilter from "@/Pages/Book/Partials/ClearFilter";
import AuthorFilter from "@/Pages/Book/Partials/AuthorFilter";
import MobileFilter from "@/Pages/Book/Partials/MobileFilter";
import CategoryFilter from "@/Pages/Book/Partials/CategoryFilter";
import PublisherFilter from "@/Pages/Book/Partials/PublisherFilter";
import IndexBreadcrumb from "@/Pages/Book/Breadcrumb/IndexBreadcrumb";

export default function Index({
  filters,
  categories,
  authors,
  publishers,
  books,
}) {
  const isInitialMount = useRef(true);
  const [bookFilter, setBookFilter] = useState(filters);

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

  const handleSelect = (e) => {
    const sortBy = e.target.value;

    let newBookFilter = bookFilter;
    delete newBookFilter.sort;

    setBookFilter({
      ...newBookFilter,
      ...(sortBy.length > 0 && {
        sort: sortBy,
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
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      submitFilter(bookFilter);
    }
  }, [bookFilter]);

  return (
    <MainLayout filters={bookFilter}>
      <Head>
        <title>Books Listing — Book Store</title>
        <meta
          name="description"
          content="Buy books online from the No. 1 Online Bookstore in Malaysia! Enjoy fast & free shipping with min. spend, book deals & exclusive discounts."
        />
      </Head>

      <div className="container max-w-6xl mx-auto my-10 mt-0 px-4 xl:px-0">
        <IndexBreadcrumb />
        <BookBanner />
        <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-center md:justify-between items-center pb-4">
          <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
            Showing {books.from} to {books.to} of {books.total} results
          </p>
          <div className="w-full md:w-auto grid grid-cols-2 gap-2 md:grid-cols-1 md:gap-0">
            <MobileFilter
              handleCheckbox={handleCheckbox}
              bookFilter={bookFilter}
              categories={categories}
              authors={authors}
              publishers={publishers}
            />
            <SortBy handleSelect={handleSelect} bookFilter={bookFilter} />
          </div>
        </div>

        <div className="flex">
          <div className="hidden md:flex md:flex-col w-[260px] space-y-4 shrink-0 pr-4 border-r border-gray-200 dark:border-gray-700">
            <ClearFilter bookFilter={bookFilter} />
            <TypeFilter
              handleCheckbox={handleCheckbox}
              bookFilter={bookFilter}
            />
            <CategoryFilter
              handleCheckbox={handleCheckbox}
              bookFilter={bookFilter}
              categories={categories}
            />
            <AuthorFilter
              handleCheckbox={handleCheckbox}
              bookFilter={bookFilter}
              authors={authors}
            />
            <PublisherFilter
              handleCheckbox={handleCheckbox}
              bookFilter={bookFilter}
              publishers={publishers}
            />
            <PriceFilter
              handleCheckbox={handleCheckbox}
              bookFilter={bookFilter}
            />
          </div>

          <div className="grow md:pl-4">
            {books.data.length > 0 && (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 lg:gap-x-6 gap-y-4 lg:gap-y-8">
                {books.data.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            )}

            {books.data.length < 1 && (
              <div className="w-full flex justify-center">
                <div className="w-full flex rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 flex-col">
                  <div className="flex h-full flex-col justify-start p-3 lg:p-6">
                    <p class="text-gray-900 dark:text-white text-center">
                      Sorry, there are no books found. Please try again with
                      different keywords or filters.
                    </p>
                  </div>
                </div>
              </div>
            )}

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
