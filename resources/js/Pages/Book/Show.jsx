import { useState } from "react";
import { Accordion } from "flowbite-react";
import { Head, usePage } from "@inertiajs/react";

import MainLayout from "@/Layouts/MainLayout";
import ShareLink from "@/Components/ShareLink";
import AddToCart from "@/Components/AddToCart";
import RelatedBooks from "@/Components/RelatedBooks";
import QuantityInput from "@/Components/QuantityInput";
import BookDescription from "@/Components/BookDescription";
import ShowBreadcrumb from "@/Pages/Book/Breadcrumb/ShowBreadcrumb";

export default function Show({ book, relatedBooks }) {
  const { domain } = usePage().props;

  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    if (quantity < book.stocks) {
      setQuantity(quantity + 1);
    }
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (e) => {
    if (e.target.value > book.stocks) {
      setQuantity(book.stocks);
    } else if (e.target.value < 1) {
      setQuantity(1);
    } else {
      setQuantity(e.target.value);
    }
  };

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

        <meta property="og:type" content="website" />
        <meta property="og:url" content={domain} />
        <meta property="og:title" content={`${book.title} — Book Store`} />
        <meta
          property="og:description"
          content={`${
            book.description.replace(/\\n/g, "").length > 150
              ? book.description.replace(/\\n/g, "").substring(0, 150) + "..."
              : book.description.replace(/\\n/g, "")
          }`}
        />
        <meta
          property="og:image"
          content={`${domain}/book-images/${book.image}`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={domain} />
        <meta property="twitter:title" content={`${book.title} — Book Store`} />
        <meta
          property="twitter:description"
          content={`${
            book.description.replace(/\\n/g, "").length > 150
              ? book.description.replace(/\\n/g, "").substring(0, 150) + "..."
              : book.description.replace(/\\n/g, "")
          }`}
        />
        <meta
          property="twitter:image"
          content={`${domain}/book-images/${book.image}`}
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

            <div className="mt-4 font-medium">
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

            <QuantityInput
              quantity={quantity}
              handleAdd={handleAdd}
              handleMinus={handleMinus}
              handleQuantityChange={handleQuantityChange}
            />

            <hr className="border-gray-200 dark:border-gray-700" />

            <div className="mt-8">
              <AddToCart id={book.id} quantity={quantity} />
            </div>

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

            <p className="mt-6 font-medium">Share: </p>
            <ShareLink title={book.title} slug={book.slug} />
          </div>
        </div>
        <RelatedBooks books={relatedBooks} />
      </div>
    </MainLayout>
  );
}
