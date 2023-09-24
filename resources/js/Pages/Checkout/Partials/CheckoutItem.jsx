import { Link } from "@inertiajs/react";

export default function CheckoutItem({ cart }) {
  const price = (cart.book_owner.price * cart.quantity).toLocaleString(
    "en-MY",
    {
      style: "currency",
      currency: "MYR",
      maximumFractionDigits: 2,
    }
  );

  return (
    <div className="flex items-center space-x-2 md:space-x-4 text-sm">
      <Link
        href={route("book.show", cart.book_owner.slug)}
        className="relative border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-1 rounded-md shrink-0 transition-transform ease-in-out hover:scale-105"
      >
        <img
          src={`/book-images/${cart.book_owner.image}`}
          className="w-16 h-[5.5rem] object-cover rounded-md"
        />
        <div className="absolute -top-2 -right-2 flex justify-center items-center bg-cyan-600 dark:bg-cyan-500 w-6 h-6 rounded-full text-white font-medium">
          {cart.quantity}
        </div>
      </Link>
      <div className="w-full flex justify-between items-center text-gray-900 dark:text-white">
        <Link
          href={route("book.show", cart.book_owner.slug)}
          className="hover:underline"
        >
          <p className="font-medium">{cart.book_owner.title}</p>
        </Link>
        <p className="font-medium">{price}</p>
      </div>
    </div>
  );
}
