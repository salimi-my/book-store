import { Search } from "lucide-react";
import { useForm } from "@inertiajs/react";

export default function SearchBar({ filters }) {
  const { data, setData, get, transform } = useForm({
    search: filters?.search ?? "",
  });

  const submit = (e) => {
    e.preventDefault();

    transform((data) => ({
      ...(data.search.length > 0 && {
        search: data.search,
      }),
      ...(filters?.type?.length > 0 && {
        type: filters.type,
      }),
      ...(filters?.category?.length > 0 && {
        category: filters.category,
      }),
      ...(filters?.author?.length > 0 && {
        author: filters.author,
      }),
      ...(filters?.publisher?.length > 0 && {
        publisher: filters.publisher,
      }),
      ...(filters?.price?.length > 0 && {
        price: filters.price,
      }),
      ...(filters?.sort?.length > 0 && {
        sort: filters.sort,
      }),
    }));

    get(route("book.index"), {
      preserveScroll: true,
    });
  };

  return (
    <form onSubmit={submit}>
      <div className="flex">
        <div className="relative w-full md:w-[350px] lg:w-[500px]">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            value={data.search}
            onChange={(e) => setData("search", e.target.value)}
            placeholder="Search for Title, Author, Keyword or ISBN"
            className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-2.5 text-sm pl-10 pr-20 rounded-full"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-[10px]">
            <button
              type="submit"
              className="group flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-cyan-700 border border-transparent enabled:hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 focus:ring-2 rounded-full leading-none"
            >
              <span className="flex items-stretch transition-all duration-200 rounded-md text-xs px-2 pt-1 pb-[5px] leading-none">
                Search
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
