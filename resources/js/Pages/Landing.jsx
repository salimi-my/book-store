import { Head } from "@inertiajs/react";

import MainLayout from "@/Layouts/MainLayout";

export default function Landing() {
  return (
    <MainLayout>
      <Head>
        <title>Book Store — Malaysia's Biggest Online Bookstore</title>
        <meta
          name="description"
          content="Buy books online from the No. 1 Online Bookstore in Malaysia! Enjoy fast & free shipping with min. spend, book deals & exclusive discounts."
        />
      </Head>
      <div className="h-screen">Landing</div>
    </MainLayout>
  );
}
