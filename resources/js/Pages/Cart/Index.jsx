import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Index() {
  return (
    <MainLayout>
      <Head>
        <title>Cart — Book Store</title>
        <meta
          name="description"
          content="Buy books online from the No. 1 Online Bookstore in Malaysia! Enjoy fast & free shipping with min. spend, book deals & exclusive discounts."
        />
      </Head>
      <div>Cart</div>
    </MainLayout>
  );
}
