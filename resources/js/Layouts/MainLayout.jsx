import { usePage } from "@inertiajs/react";

import Footer from "@/Components/Footer";
import MainNavbar from "@/Components/MainNavbar";
import { Flowbite } from "flowbite-react";

export default function MainLayout({ children }) {
  const { auth } = usePage().props;

  return (
    <Flowbite>
      <div className="flex flex-col min-h-screen bg-white">
        <MainNavbar user={auth.user} />
        <main className="grow min-h-[calc(100vh_-_64px_-_534px)]">
          {children}
        </main>
        <Footer />
      </div>
    </Flowbite>
  );
}
