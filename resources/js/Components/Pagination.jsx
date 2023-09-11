import { Link } from "@inertiajs/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({ links }) {
  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex -space-x-px">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.url === null ? "" : link.url}
            className={`${
              link.url === null ? "opacity-60 cursor-not-allowed" : ""
            } ${index === 0 ? "rounded-l-lg" : ""} ${
              links.length - 1 === index ? "rounded-r-lg" : ""
            } ${
              link.active
                ? "text-cyan-600 bg-cyan-50 hover:bg-cyan-100 hover:text-cyan-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:text-white"
                : "text-gray-500 bg-white hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white hover:bg-gray-100"
            } px-3 py-2 border border-gray-300 dark:border-gray-600 shadow-sm`}
          >
            {index === 0 && (
              <span className="flex items-center">
                <ChevronLeft />
                Previous
              </span>
            )}
            {links.length - 1 === index && (
              <span className="flex items-center">
                Next
                <ChevronRight />
              </span>
            )}
            {!(index === 0 || links.length - 1 === index) && (
              <span className="flex items-center">{link.label}</span>
            )}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
