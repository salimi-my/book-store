import { X } from "lucide-react";
import { router } from "@inertiajs/react";

export default function ClearFilter({ bookFilter }) {
  const clearFilter = () => {
    router.get(
      route("book.index"),
      {},
      {
        preserveScroll: true,
      }
    );
  };

  return (
    <button
      onClick={clearFilter}
      type="button"
      disabled={Object.keys(bookFilter).length === 0 ? true : false}
      className="group flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-gray-900 bg-white border border-gray-300 enabled:hover:bg-gray-100 focus:ring-cyan-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700 rounded-lg focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50"
    >
      <span className="flex items-center transition-all duration-200 rounded-md text-sm px-2 py-1.5">
        <X className="h-4 w-4 mr-1" />
        Clear Filter
      </span>
    </button>
  );
}
