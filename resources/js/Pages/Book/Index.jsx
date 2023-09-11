import BookCard from "@/Components/BookCard";
import Pagination from "@/Components/Pagination";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Index({ books }) {
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
          <div className="hidden md:flex md:flex-col w-[250px] shrink-0 px-4 border-r border-gray-200 dark:border-gray-700">
            Filter
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
