import { debounce } from "lodash";
import { Search } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Checkbox, Flowbite, Label, TextInput } from "flowbite-react";

import FilterLayout from "@/Layouts/FilterLayout";
import ScrollAreaLayout from "@/Layouts/ScrollAreaLayout";
import searchFilterTheme from "@/Pages/Book/Partials/searchBarTheme";

export default function AuthorFilter({
  handleCheckbox,
  bookFilter,
  authors,
  isMobile,
}) {
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
      <div className="flex flex-col">
        <div className="px-4 pt-3 bg-white dark:bg-gray-800">
          <Flowbite theme={{ theme: searchFilterTheme }}>
            <TextInput
              icon={Search}
              placeholder="Search author..."
              required
              type="text"
              onChange={(e) => setSearchVal(e.target.value)}
            />
          </Flowbite>
        </div>
        <ScrollAreaLayout>
          {authorList.map((author, index) => (
            <div key={index} className="flex items-center gap-2 w-[200px]">
              <Checkbox
                id={`author-` + index + `${isMobile ? "-mobile" : ""}`}
                value={author.author}
                className="cursor-pointer"
                onChange={(e) => handleCheckbox(e, "author")}
                defaultChecked={
                  bookFilter.author &&
                  bookFilter.author.split(",").includes(author.author)
                }
              />
              <Label
                htmlFor={`author-` + index + `${isMobile ? "-mobile" : ""}`}
                className="truncate font-medium cursor-pointer"
              >
                {author.author}
              </Label>
            </div>
          ))}
        </ScrollAreaLayout>
      </div>
    </FilterLayout>
  );
}
