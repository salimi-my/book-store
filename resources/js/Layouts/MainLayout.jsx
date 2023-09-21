import { usePage } from "@inertiajs/react";

import Footer from "@/Components/Footer";
import MainNavbar from "@/Components/MainNavbar";
import CartDrawer from "@/Components/CartDrawer";

export default function MainLayout({ children, filters }) {
  const { auth, carts } = usePage().props;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <MainNavbar user={auth.user} carts={carts} filters={filters} />
      <main className="grow min-h-[calc(100vh_-_64px_-_534px)] bg-white dark:bg-gray-900">
        {children}
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}
