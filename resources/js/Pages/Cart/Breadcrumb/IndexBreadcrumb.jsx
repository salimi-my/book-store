import { Link } from "@inertiajs/react";
import { ChevronRight, Home } from "lucide-react";

export default function IndexBreadcrumb() {
  return (
    <nav aria-label="Default breadcrumb example" className="my-5">
      <ol className="flex items-center">
        <li className="group flex items-center">
          <ChevronRight className="mx-1 h-6 w-6 text-gray-400 group-first:hidden md:mx-2" />
          <Link
            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            data-testid="flowbite-breadcrumb-item"
            href="/"
          >
            <Home className="mr-2 h-4 w-4" />
            <p>Home</p>
          </Link>
        </li>
        <li className="group flex items-center">
          <ChevronRight className="mx-1 h-6 w-6 text-gray-400 group-first:hidden md:mx-2" />
          <span
            className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400"
            data-testid="flowbite-breadcrumb-item"
          >
            Cart
          </span>
        </li>
      </ol>
    </nav>
  );
}
