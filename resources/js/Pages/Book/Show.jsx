import { Head } from "@inertiajs/react";
import { Accordion, Button } from "flowbite-react";

import MainLayout from "@/Layouts/MainLayout";
import BookDescription from "@/Components/BookDescription";
import ShowBreadcrumb from "@/Pages/Book/Breadcrumb/ShowBreadcrumb";

export default function Show({ book }) {
  const price = book.price.toLocaleString("en-MY", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 2,
  });

  return (
    <MainLayout>
      <Head>
        <title>{`${book.title} — Book Store`}</title>
        <meta
          name="description"
          content={`${
            book.description.replace(/\\n/g, "").length > 150
              ? book.description.replace(/\\n/g, "").substring(0, 150) + "..."
              : book.description.replace(/\\n/g, "")
          }`}
        />
      </Head>

      <div className="container max-w-7xl mx-auto my-10 px-4 xl:px-0">
        <ShowBreadcrumb title={book.title} />
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <div className="flex rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 flex-col">
              <div className="flex h-full flex-col justify-start p-3 lg:p-4">
                <img
                  className="object-cover w-full h-auto rounded-md"
                  src={`/book-images/${book.image}`}
                  alt={book.title}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col text-gray-900 dark:text-white">
            <h1 className="font-medium text-4xl">{book.title}</h1>

            <h2 className="font-bold text-3xl text-cyan-700 dark:text-cyan-600 mt-3">
              {price}
            </h2>

            <div className="mt-5 font-medium">
              <p>
                Author: <span className="font-normal">{book.author}</span>
              </p>
              <p>
                ISBN: <span className="font-normal">{book.isbn}</span>
              </p>
            </div>

            <p className="mt-3 font-medium">
              Stocks:{" "}
              {book.stocks > 0 && (
                <span className="font-normal text-green-500">
                  {book.stocks} units available
                </span>
              )}
              {book.stocks < 1 && (
                <span className="font-normal text-red-500">Out of stocks</span>
              )}
            </p>

            <hr className="mt-8 border-gray-200 dark:border-gray-700" />

            <Button className="mt-8 rounded-full">Add to Cart</Button>

            <hr className="mt-8 border-gray-200 dark:border-gray-700" />

            <BookDescription description={book.description} />

            <Accordion className="mt-8">
              <Accordion.Panel>
                <Accordion.Title className="py-3 focus:ring-2">
                  Book Details
                </Accordion.Title>
                <Accordion.Content className="py-3 text-sm font-medium text-gray-600 dark:text-gray-300 divide-y divide-gray-200 dark:divide-gray-700">
                  <div className="flex justify-between py-2">
                    <p>Publisher</p>
                    <p>{book.publisher}</p>
                  </div>
                  <div className="flex justify-between py-2">
                    <p>Weight</p>
                    <p>{book.weight}g</p>
                  </div>
                  <div className="flex justify-between py-2">
                    <p>Pages</p>
                    <p>{book.pages}</p>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
