import { useState } from "react";
import { Table } from "flowbite-react";
import { Link } from "@inertiajs/react";

import CartQuantity from "@/Components/CartQuantity";

export default function CartTableRow({ cart }) {
  const [isDisabled, setIsDisabled] = useState(false);

  const price = cart.book_owner.price.toLocaleString("en-MY", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 2,
  });

  const totalPrice = (cart.book_owner.price * cart.quantity).toLocaleString(
    "en-MY",
    {
      style: "currency",
      currency: "MYR",
      maximumFractionDigits: 2,
    }
  );

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell>
        <div className="flex items-center space-x-3 md:space-x-6">
          <Link
            href={route("book.show", cart.book_owner.slug)}
            className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-1 rounded-md shrink-0 transition-transform ease-in-out hover:scale-105"
          >
            <img
              src={`/book-images/${cart.book_owner.image}`}
              className={`w-28 h-40 object-cover rounded-md ${
                isDisabled ? "animate-pulse" : ""
              }`}
            />
          </Link>
          <div className="flex flex-col text-gray-900 dark:text-white">
            <p className={`font-medium ${isDisabled ? "animate-pulse" : ""}`}>
              {price}
            </p>
            <Link
              href={route("book.show", cart.book_owner.slug)}
              className="hover:underline"
            >
              <p className={`font-medium ${isDisabled ? "animate-pulse" : ""}`}>
                {cart.book_owner.title}
              </p>
            </Link>
          </div>
        </div>
      </Table.Cell>
      <Table.Cell>
        <CartQuantity
          cart={cart}
          isDisabled={isDisabled}
          setIsDisabled={setIsDisabled}
        />
      </Table.Cell>
      <Table.Cell className="text-right">
        <p
          className={`text-gray-900 dark:text-white font-medium ${
            isDisabled ? "animate-pulse" : ""
          }`}
        >
          {totalPrice}
        </p>
      </Table.Cell>
    </Table.Row>
  );
}
