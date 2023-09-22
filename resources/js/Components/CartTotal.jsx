import { Link } from "@inertiajs/react";

export default function CartTotal({ carts }) {
  const price = carts
    .map((cart) => cart.book_owner.price * cart.quantity)
    .reduce((totalPrice, currentPrice) => totalPrice + currentPrice, 0)
    .toLocaleString("en-MY", {
      style: "currency",
      currency: "MYR",
      maximumFractionDigits: 2,
    });

  return (
    <div className="flex flex-col border-t px-4 md:px-8 py-4">
      <p className="font-medium text-gray-900 dark:text-white">Total</p>
      <p className="font-bold text-2xl text-gray-900 dark:text-white">
        {price}
      </p>
      <p className="pt-4 text-sm md:text-base text-gray-900 dark:text-white">
        Tax included. Shipping calculated at checkout.
      </p>
      <div className="flex items-center py-3">
        <Link
          href={route("cart.index")}
          className="w-full text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          View Cart
        </Link>
        <button
          type="button"
          className="w-full text-cyan-700 hover:text-white border border-cyan-700 hover:bg-cyan-800 focus:ring-2 focus:outline-none focus:ring-cyan-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-cyan-500 dark:text-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 dark:focus:ring-cyan-800"
        >
          Check Out
        </button>
      </div>
    </div>
  );
}
