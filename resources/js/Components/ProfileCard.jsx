import { Link, usePage } from "@inertiajs/react";

export default function ProfileCard() {
  const { auth } = usePage().props;
  const pathname = window.location.pathname;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center py-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-md object-cover"
          src={`${auth.user.avatar ? auth.user.src : "/avatar.svg"}`}
          alt="user photo"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {auth.user.name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {auth.user.email}
        </span>

        <div className="w-full px-8 mt-8">
          <Link
            href={route("profile.edit")}
            className={`${
              pathname === "/profile"
                ? "bg-cyan-700 text-white dark:text-white"
                : ""
            } flex justify-center w-full mb-2 text-cyan-700 hover:text-white border border-cyan-700 hover:bg-cyan-800 focus:ring-2 focus:outline-none focus:ring-cyan-300 font-medium rounded-full text-sm px-5 py-2 text-center dark:border-cyan-500 dark:text-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 dark:focus:ring-cyan-800`}
          >
            Profile
          </Link>
          <Link
            href={route("address.index")}
            className={`${
              pathname === "/address"
                ? "bg-cyan-700 text-white dark:text-white"
                : ""
            } flex justify-center w-full mb-2 text-cyan-700 hover:text-white border border-cyan-700 hover:bg-cyan-800 focus:ring-2 focus:outline-none focus:ring-cyan-300 font-medium rounded-full text-sm px-5 py-2 text-center dark:border-cyan-500 dark:text-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 dark:focus:ring-cyan-800`}
          >
            Addresses
          </Link>
          <Link
            href="#"
            className={`${
              pathname === "/order"
                ? "bg-cyan-700 text-white dark:text-white"
                : ""
            } flex justify-center w-full mb-2 text-cyan-700 hover:text-white border border-cyan-700 hover:bg-cyan-800 focus:ring-2 focus:outline-none focus:ring-cyan-300 font-medium rounded-full text-sm px-5 py-2 text-center dark:border-cyan-500 dark:text-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 dark:focus:ring-cyan-800`}
          >
            Orders
          </Link>
          <hr className="my-2 dark:border-gray-600" />
          <Link
            href={route("logout")}
            method="post"
            as="button"
            className="w-full my-2 text-cyan-700 hover:text-white border border-cyan-700 hover:bg-cyan-800 focus:ring-2 focus:outline-none focus:ring-cyan-300 font-medium rounded-full text-sm px-5 py-2 text-center dark:border-cyan-500 dark:text-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 dark:focus:ring-cyan-800"
          >
            <i className="fa-solid fa-right-from-bracket"></i> Sign out
          </Link>
        </div>
      </div>
    </div>
  );
}
