import { Search } from "lucide-react";
import { useForm } from "@inertiajs/react";
import { Flowbite, TextInput } from "flowbite-react";

const searchInput = {
  textInput: {
    field: {
      base: "relative w-full md:w-[350px] lg:w-[500px]",
      input: {
        withAddon: {
          off: "rounded-full",
        },
      },
    },
  },
};

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
      ...(filters?.page?.length > 0 && {
        page: filters.page,
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
      <Flowbite theme={{ theme: searchInput }}>
        <TextInput
          type="text"
          icon={Search}
          value={data.search}
          onChange={(e) => setData("search", e.target.value)}
          placeholder="Search for Title, Author, Keyword or ISBN"
        />
      </Flowbite>
    </form>
  );
}
