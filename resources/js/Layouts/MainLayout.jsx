import { usePage } from "@inertiajs/react";

import Footer from "@/Components/Footer";
import MainNavbar from "@/Components/MainNavbar";

export default function MainLayout({ children }) {
  const { auth } = usePage().props;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <MainNavbar user={auth.user} />
      <main className="grow min-h-[calc(100vh_-_64px_-_534px)] bg-gray-50 dark:bg-gray-900">
        {children}
      </main>
      <Footer />
    </div>
  );
}
