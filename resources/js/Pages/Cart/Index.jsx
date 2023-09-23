import { Button } from "flowbite-react";
import { Head, Link, router, usePage } from "@inertiajs/react";

import MainLayout from "@/Layouts/MainLayout";
import PaymentOption from "@/Components/PaymentOption";
import CartTable from "@/Pages/Cart/Partials/CartTable";
import IndexBreadcrumb from "@/Pages/Cart/Breadcrumb/IndexBreadcrumb";

export default function Index() {
  const { carts } = usePage().props;

  const totalPrice = carts
    .map((cart) => cart.book_owner.price * cart.quantity)
    .reduce((totalPrice, currentPrice) => totalPrice + currentPrice, 0)
    .toLocaleString("en-MY", {
      style: "currency",
      currency: "MYR",
      maximumFractionDigits: 2,
    });

  return (
    <MainLayout>
      <Head>
        <title>Cart — Book Store</title>
        <meta
          name="description"
          content="Buy books online from the No. 1 Online Bookstore in Malaysia! Enjoy fast & free shipping with min. spend, book deals & exclusive discounts."
        />
      </Head>
      <div className="container max-w-6xl mx-auto my-10 mt-0 px-4 xl:px-0">
        <IndexBreadcrumb />
        <h1 className="font-bold text-xl pb-4 text-gray-700 dark:text-gray-200">
          Your Cart
        </h1>

        {carts.length > 0 && (
          <div className="grid lg:grid-cols-6 gap-6">
            <div className="lg:col-span-4">
              <div className="border dark:border-gray-700 rounded-lg">
                <CartTable carts={carts} />
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="flex flex-col border dark:border-gray-700 rounded-lg py-4 px-6 bg-white dark:bg-gray-800">
                <p className="font-medium text-gray-900 dark:text-white">
                  Total
                </p>
                <p className="font-bold text-2xl text-gray-900 dark:text-white">
                  {totalPrice}
                </p>
                <div className="pt-2 pb-4 my-5 border-y dark:border-gray-700">
                  <PaymentOption />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Tax included. Shipping calculated at checkout.
                </p>
                <div className="flex items-center py-3">
                  <Link className="w-full text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-cyan-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                    Check Out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {carts.length < 1 && (
          <div className="flex flex-col space-y-4 max-w-xs">
            <p className="font-medium text-gray-900 dark:text-white">
              Your cart is currently empty.
            </p>
            <Button
              onClick={() => router.get(route("book.index"))}
              className="rounded-full"
            >
              Continue browsing
            </Button>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
