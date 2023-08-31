import { usePage } from "@inertiajs/react";

import MainNavbar from "@/Components/MainNavbar";

export default function MainLayout({ children }) {
  const { auth } = usePage().props;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <MainNavbar user={auth.user} />
      <main className="grow min-h-[calc(100vh_-_64px)]">{children}</main>
    </div>
  );
}
