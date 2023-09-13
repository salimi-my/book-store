import { debounce } from "lodash";
import { Search } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Checkbox, Flowbite, Label, TextInput } from "flowbite-react";

import FilterLayout from "@/Layouts/FilterLayout";
import searchFilterTheme from "@/Pages/Book/Partials/searchBarTheme";

export default function AuthorFilter({ handleCheckbox, bookFilter, authors }) {
  const [authorList, setAuthorList] = useState(authors);
  const [searchVal, setSearchVal] = useState("");

  const handleFilter = (search) => {
    if (search === "") {
      setAuthorList(authors);
      return;
    }

    const filterBySearch = authorList.filter((item) => {
      if (item.author.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    });

    setAuthorList(filterBySearch);
  };

  const filterList = useCallback(
    debounce((search) => handleFilter(search), 500),
    []
  );

  useEffect(() => {
    filterList(searchVal);
  }, [searchVal]);

  return (
    <FilterLayout title="Author">
      <div className="flex flex-col gap-1 p-4">
        <Flowbite theme={{ theme: searchFilterTheme }}>
          <TextInput
            icon={Search}
            placeholder="Search author..."
            required
            type="text"
            onChange={(e) => setSearchVal(e.target.value)}
          />
        </Flowbite>
        {authorList.map((author, index) => (
          <div key={index} className="flex items-center gap-2 w-[193px]">
            <Checkbox
              id={author.author}
              value={author.author}
              className="cursor-pointer"
              onChange={(e) => handleCheckbox(e, "author")}
              defaultChecked={
                bookFilter.author &&
                bookFilter.author.split(",").includes(author.author)
              }
            />
            <Label
              htmlFor={author.author}
              className="truncate font-medium cursor-pointer"
            >
              {author.author}
            </Label>
          </div>
        ))}
      </div>
    </FilterLayout>
  );
}
