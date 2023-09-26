import { Head, router } from "@inertiajs/react";
import { Button } from "flowbite-react";
import { CheckCircle, XCircle } from "lucide-react";

export default function Index({ params, order }) {
  return (
    <>
      <Head>
        <title>Payment Return — Book Store</title>
        <meta
          name="description"
          content="Buy books online from the No. 1 Online Bookstore in Malaysia! Enjoy fast & free shipping with min. spend, book deals & exclusive discounts."
        />
      </Head>
      <div className="w-full h-screen flex justify-center items-center p-4">
        <div className="flex rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 flex-col">
          {params.status_id === "1" && (
            <div className="flex h-full flex-col justify-center items-center p-3 lg:p-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="text-green-500" />
                <h1 className="font-bold text-xl">Payment Success</h1>
              </div>
              <p className="pt-2">
                Your payment has been successfully accepted.
              </p>
              <p>Thank you!</p>
              <Button
                onClick={() => router.get(route("order.show", order.order_no))}
                className="mt-3"
              >
                Go to Order
              </Button>
            </div>
          )}

          {params.status_id !== "1" && (
            <div className="flex h-full flex-col justify-center items-center p-3 lg:p-6">
              <div className="flex items-center space-x-2">
                <XCircle className="text-red-500" />
                <h1 className="font-bold text-xl">Payment Faild</h1>
              </div>
              <p className="pt-2">
                Your payment has been failed to be accepted.
              </p>
              <p>Please try again!</p>
              <Button
                onClick={() => router.get(route("order.show", order.order_no))}
                className="mt-3"
              >
                Go to Order
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
