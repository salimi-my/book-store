import { Card } from "flowbite-react";
import { Head } from "@inertiajs/react";

import Order from "@/Components/Order";
import MainLayout from "@/Layouts/MainLayout";
import ProfileLayout from "@/Layouts/ProfileLayout";

export default function Index({ orders }) {
  return (
    <MainLayout>
      <Head>
        <title>My Orders — Book Store</title>
        <meta
          name="description"
          content="Buy books online from the No. 1 Online Bookstore in Malaysia! Enjoy fast & free shipping with min. spend, book deals & exclusive discounts."
        />
      </Head>

      <ProfileLayout>
        <Card className="w-full bg-white rounded-lg shadow dark:border md:mt-0 dark:bg-gray-800 dark:border-gray-700">
          <section className="w-full p-2">
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  My Orders
                </h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  These are your list of orders.
                </p>
              </header>
            </div>
            <div className="flex flex-col mt-10">
              {orders.map((order, index) => (
                <Order key={order.id} order={order} first={index === 0} />
              ))}
            </div>
          </section>
        </Card>
      </ProfileLayout>
    </MainLayout>
  );
}
