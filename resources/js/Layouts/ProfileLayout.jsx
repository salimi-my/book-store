import ProfileCard from "@/Components/ProfileCard";

export default function ProfileLayout({ children }) {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-6xl grid lg:grid-cols-10 gap-6 px-4 xl:mx-auto py-20">
        <div className="lg:col-span-3">
          <ProfileCard />
        </div>
        <div className="lg:col-span-7">{children}</div>
      </div>
    </section>
  );
}
