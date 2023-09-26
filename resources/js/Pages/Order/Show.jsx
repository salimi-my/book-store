import { ChevronLeft } from "lucide-react";
import { Button, Card } from "flowbite-react";
import { Head, Link, router } from "@inertiajs/react";

import MainLayout from "@/Layouts/MainLayout";
import ProfileLayout from "@/Layouts/ProfileLayout";
import { useState } from "react";

export default function Show({ order, order_items }) {
  const [isDisable, setIsDisable] = useState(false);

  const subTotal = order.subtotal.toLocaleString("en-MY", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 2,
  });

  const shipping = order.shipping.toLocaleString("en-MY", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 2,
  });

  const totalAll = order.total.toLocaleString("en-MY", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 2,
  });

  const handlePayment = () => {
    setIsDisable(true);
    router.put(route("order.update", order.order_no));
  };

  return (
    <MainLayout>
      <Head>
        <title>Order Detail — Book Store</title>
        <meta
          name="description"
          content="Buy books online from the No. 1 Online Bookstore in Malaysia! Enjoy fast & free shipping with min. spend, book deals & exclusive discounts."
        />
      </Head>

      <ProfileLayout>
        <Card className="w-full bg-white rounded-lg shadow dark:border md:mt-0 dark:bg-gray-800 dark:border-gray-700">
          <section className="w-full p-2">
            <Link
              href={route("order.index")}
              className="text-cyan-700 hover:text-cyan-800 dark:text-cyan-600 dark:hover:text-cyan-700 flex items-center mb-6 hover:underline text-sm"
            >
              <ChevronLeft className="w-5 h-5 -ml-1" />
              Back to Orders
            </Link>

            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <header className="flex items-center">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white pr-2 border-r border-gray-300 dark:border-gray-600">
                  Order ID: {order.order_no}
                </h2>
                <p className="pl-2 text-gray-500 dark:text-gray-400 font-medium text-xs">
                  {order.paid_at && (
                    <span className="text-green-400 border border-green-400 rounded-md px-1">
                      PAID
                    </span>
                  )}
                  {!order.paid_at && (
                    <span className="text-red-500 border border-red-500 rounded-md px-1">
                      UNPAID
                    </span>
                  )}
                </p>
              </header>
            </div>

            <h3 className="pt-4 pb-1 font-medium text-lg">Shipping Address</h3>
            <p className="text-gray-500 dark:text-gray-400 font-medium text-base">
              {order.shipping_name} |{" "}
              <span className="text-sm">{order.shipping_phone}</span>
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {order.shipping_address},
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {order.shipping_postal_code} {order.shipping_city},{" "}
              {order.shipping_state},
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {order.shipping_country}
            </p>

            <h3 className="pt-4 pb-4 font-medium text-lg">Order Summary</h3>
            <div className="flex flex-col space-y-3 text-gray-900 dark:text-white">
              {order_items.map((order_item) => (
                <div
                  key={order_item.id}
                  className="flex items-center space-x-2 md:space-x-4 text-sm"
                >
                  <Link
                    href={route("book.show", order_item.book.slug)}
                    className="relative border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-1 rounded-md shrink-0 transition-transform ease-in-out hover:scale-105"
                  >
                    <img
                      src={`/book-images/${order_item.book.image}`}
                      className="w-16 h-[5.5rem] object-cover rounded-md"
                    />
                    <div className="absolute -top-2 -right-2 flex justify-center items-center bg-cyan-600 dark:bg-cyan-500 w-6 h-6 rounded-full text-white font-medium">
                      {order_item.quantity}
                    </div>
                  </Link>
                  <div className="w-full flex justify-between items-center text-gray-900 dark:text-white">
                    <Link
                      href={route("book.show", order_item.book.slug)}
                      className="hover:underline"
                    >
                      <p className="font-medium">{order_item.book.title}</p>
                    </Link>
                    <p className="font-medium">
                      {(order_item.price * order_item.quantity).toLocaleString(
                        "en-MY",
                        {
                          style: "currency",
                          currency: "MYR",
                          maximumFractionDigits: 2,
                        }
                      )}
                    </p>
                  </div>
                </div>
              ))}

              <div className="flex flex-col space-y-2 border-y border-gray-200 dark:border-gray-600 py-4 text-sm">
                <div className="flex justify-between items-center">
                  <p>Subtotal</p>
                  <p className="font-medium">{subTotal}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>Shipping</p>
                  <p className="font-medium">{shipping}</p>
                </div>
              </div>

              <div className="flex justify-between items-center text-base">
                <p>Total</p>
                <p className="font-medium">{totalAll}</p>
              </div>
            </div>
          </section>

          {!order.paid_at && (
            <div className="flex justify-center items-center mt-4">
              <Button
                onClick={handlePayment}
                disabled={isDisable}
                type="submit"
                size="sm"
              >
                Pay Now
              </Button>
            </div>
          )}
        </Card>
      </ProfileLayout>
    </MainLayout>
  );
}
