import ProfileBreadcrumb from "@/Components/ProfileBreadcrumb";
import ProfileCard from "@/Components/ProfileCard";

export default function ProfileLayout({ children }) {
  return (
    <section className="min-h-[calc(100vh_-_100px_-_534px)] w-full bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl px-4 mx-auto">
        <ProfileBreadcrumb />
      </div>
      <div className="w-full max-w-6xl grid lg:grid-cols-10 gap-6 px-4 xl:mx-auto py-20 pt-0">
        <div className="lg:col-span-3">
          <ProfileCard />
        </div>
        <div className="lg:col-span-7">{children}</div>
      </div>
    </section>
  );
}
