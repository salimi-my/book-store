import { Head, Link } from "@inertiajs/react";

import MainLayout from "@/Layouts/MainLayout";
import LandingBanner from "@/Components/LandingBanner";
import RandomBooks from "@/Components/RandomBooks";

export default function Landing({ randomBooks }) {
  return (
    <MainLayout>
      <Head>
        <title>Book Store — Malaysia's Biggest Online Bookstore</title>
        <meta
          name="description"
          content="Buy books online from the No. 1 Online Bookstore in Malaysia! Enjoy fast & free shipping with min. spend, book deals & exclusive discounts."
        />
      </Head>
      <div className="container max-w-6xl mx-auto my-10 mt-0 px-4 xl:px-0">
        <LandingBanner />

        <div className="flex justify-center pt-4">
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-20 items-center max-w-[800px]">
            <img src="/book-cloud.png" className="h-44 md:ml-auto" />
            <div className="flex flex-col max-w-[450px] text-center md:text-left text-gray-900 dark:text-white">
              <h2 className="font-semibold text-2xl">
                Find & Buy Books From Our Collection
              </h2>
              <p className="mt-2 text-sm md:text-base">
                Search your favourite books here using our large collections of
                books list.
              </p>
              <div className="pt-4">
                <Link
                  href={route("book.index")}
                  as="button"
                  className="text-white mt-2 bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  Find Book
                </Link>
              </div>
            </div>
          </div>
        </div>

        <section className="max-w-6xl grid lg:grid-cols-2 gap-4 mx-0 xl:mx-auto mt-10">
          <div>
            <h3 className="text-gray-800 text-2xl font-semibold mb-4 dark:text-white">
              Browse all kinds of books
            </h3>
            <div className="flex items-center bg-cyan-700 dark:bg-cyan-800 p-8 rounded-lg">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-5">
                  We have books listing for all kinds of categories!
                </h3>
                <Link
                  href={route("book.index")}
                  as="button"
                  className="text-cyan-700 bg-white hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Let's Go!
                </Link>
              </div>
              <img src="/book-earth.png" className="w-24" />
            </div>
            <div className="grid grid-cols-2 mt-4 gap-4">
              <div className="bg-gray-400 dark:bg-gray-800 rounded-lg p-7">
                <h3 className="text-white text-lg md:text-3xl font-medium">
                  We have all popular books for you
                </h3>
                <Link
                  href={route("book.index")}
                  as="button"
                  className="text-white mt-6 bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  View Them
                </Link>
              </div>
              <div className="bg-cyan-200 dark:bg-cyan-300 rounded-lg p-7">
                <h3 className="text-gray-700 text-lg md:text-3xl font-medium">
                  View the latest book pricing trends
                </h3>
                <Link
                  href={route("book.index")}
                  as="button"
                  className="text-white mt-6 bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                >
                  Check it Out
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full relative">
            <h3 className="text-gray-800 text-2xl font-semibold mb-4 dark:text-white">
              Get your book from us
            </h3>
            <img
              src="/book-background.jpg"
              className="h-3/4 md:h-3/5 lg:h-auto xl:h-[68.5%] w-full rounded-lg brightness-75 object-cover"
            />
            <div className="absolute top-20 md:top-32 lg:top-20 left-10">
              <h3 className="text-white text-3xl md:text-4xl font-semibold">
                Let us guide you to
                <br />
                your new book
              </h3>
              <Link
                href={route("book.index")}
                as="button"
                className="text-white mt-4 md:mt-8 bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Get Started
              </Link>
            </div>
            <div className="absolute top-72 md:top-96 lg:top-[26rem] xl:top-[22rem] left-10">
              <Link href={route("book.index")} className="flex items-center">
                <img
                  src="/book-store.png"
                  className="h-16 md:h-20 mr-3"
                  alt="House Logo"
                />
                <div>
                  <h3 className="self-center text-2xl md:text-3xl font-bold whitespace-nowrap text-white">
                    Book Store
                  </h3>
                  <h3 className="text-white text-md md:text-xl font-medium">
                    We'll get your book
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section className="w-full bg-gray-100 dark:bg-gray-700 -mt-16 md:-mt-40 lg:mt-20 xl:-mt-16">
        <div className="max-w-6xl mx-0 xl:mx-auto mt-10 py-10">
          <RandomBooks books={randomBooks} />
        </div>
      </section>

      <section className="max-w-6xl grid lg:grid-cols-2 gap-4 mx-4 xl:mx-auto">
        <img src="/book-stack.png" className="w-full object-cover p-10" />
        <div className="flex flex-col self-center p-8 items-center lg:items-start">
          <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Fictions or non-fictions for you
          </h3>
          <p className="mb-5 font-normal text-gray-700 dark:text-gray-400 text-center lg:text-left">
            Browse for all books categories for both fiction and non-fiction.
            Get them all delivered to your door.
          </p>
          <div>
            <Link
              href={route("book.index")}
              className="text-white mt-2 bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            >
              Check it Out
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
