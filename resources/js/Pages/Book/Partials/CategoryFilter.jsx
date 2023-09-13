import { debounce } from "lodash";
import { Search } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Checkbox, Flowbite, Label, TextInput } from "flowbite-react";

import FilterLayout from "@/Layouts/FilterLayout";
import searchFilterTheme from "@/Pages/Book/Partials/searchBarTheme";

export default function CategoryFilter({
  handleCheckbox,
  bookFilter,
  categories,
}) {
  const [categoryList, setCategoryList] = useState(categories);
  const [searchVal, setSearchVal] = useState("");

  const handleFilter = (search) => {
    if (search === "") {
      setCategoryList(categories);
      return;
    }

    const filterBySearch = categoryList.filter((item) => {
      if (item.name.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    });

    setCategoryList(filterBySearch);
  };

  const filterList = useCallback(
    debounce((search) => handleFilter(search), 500),
    []
  );

  useEffect(() => {
    filterList(searchVal);
  }, [searchVal]);

  return (
    <FilterLayout title="Category">
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
        {categoryList.map((category) => (
          <div key={category.id} className="flex items-center gap-2 w-[193px]">
            <Checkbox
              id={category.name}
              value={category.name}
              className="cursor-pointer"
              onChange={(e) => handleCheckbox(e, "category")}
              defaultChecked={
                bookFilter.category &&
                bookFilter.category.split(",").includes(category.name)
              }
            />
            <Label
              htmlFor={category.name}
              className="truncate font-medium cursor-pointer"
            >
              {category.name}
            </Label>
          </div>
        ))}
      </div>
    </FilterLayout>
  );
}
