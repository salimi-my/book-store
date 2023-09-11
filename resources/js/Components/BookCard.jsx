import { Button } from "flowbite-react";

export default function BookCard({ book }) {
  const price = book.price.toLocaleString("en-MY", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 2,
  });
  return (
    <div className="flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col">
      <div className="flex h-full flex-col justify-start p-6">
        <img
          className="object-cover w-full h-72 rounded-md"
          src={`/book-images/${book.image}`}
          alt={book.title}
        />
        <p className="text-gray-500 dark:text-gray-400 uppercase text-sm mt-3">
          {book.publisher}
        </p>
        <h5 className="text-base font-bold text-gray-900 dark:text-white line-clamp-2 my-2 min-h-[50px]">
          <p>{book.title}</p>
        </h5>
        <p className="font-medium text-gray-800 dark:text-gray-200">{price}</p>
        {book.price > 0 && (
          <p className="text-sm mt-1 text-green-500 dark:text-green-400">
            In Stock
          </p>
        )}
        {book.price < 1 && (
          <p className="text-sm mt-1 text-red-500 dark:text-red-400">
            Out of Stock
          </p>
        )}
        <Button className="mt-3 rounded-full">Add to Cart</Button>
      </div>
    </div>
  );
}
