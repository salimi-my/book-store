import MainNavbar from "@/Components/MainNavbar";

export default function MainLayout({ user, children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <MainNavbar user={user} />
      <main className="grow">{children}</main>
    </div>
  );
}
