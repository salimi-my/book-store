import { debounce } from "lodash";
import { router } from "@inertiajs/react";
import { Checkbox, Label } from "flowbite-react";
import { useCallback, useEffect, useState } from "react";

import FilterLayout from "@/Layouts/FilterLayout";

export default function TypeFilter({ filters }) {
  const [bookFilter, setBookFilter] = useState({
    filters,
  });

  const handleCheckbox = (e) => {
    const bookType = e.target.value;
    let bookTypeArr = !bookFilter.type ? [] : bookFilter.type.split(",");

    if (e.target.checked) {
      if (!bookTypeArr.includes(bookType)) {
        bookTypeArr.push(bookType);
      }
    } else {
      if (bookTypeArr.includes(bookType)) {
        bookTypeArr = bookTypeArr.filter((word) => word !== bookType);
      }
    }

    setBookFilter({
      ...(bookTypeArr.length > 0 && { type: bookTypeArr.join(",") }),
    });
  };

  const submitFilter = useCallback(
    debounce(
      (bookFilter) =>
        router.get(route("book.index"), bookFilter, {
          preserveState: true,
          preserveScroll: true,
        }),
      500
    ),
    []
  );

  useEffect(() => {
    submitFilter(bookFilter);
  }, [bookFilter]);

  return (
    <FilterLayout title="Type">
      <div className="flex flex-col gap-1 p-3">
        <div className="flex items-center gap-2">
          <Checkbox
            id="fiction"
            value="fiction"
            className="cursor-pointer"
            onChange={(e) => handleCheckbox(e)}
            defaultChecked={
              filters.type && filters.type.split(",").includes("fiction")
            }
          />
          <Label
            htmlFor="fiction"
            className="truncate font-medium cursor-pointer"
          >
            Fiction
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="non-fiction"
            value="non-fiction"
            className="cursor-pointer"
            onChange={(e) => handleCheckbox(e)}
            defaultChecked={
              filters.type && filters.type.split(",").includes("non-fiction")
            }
          />
          <Label
            htmlFor="non-fiction"
            className="truncate font-medium cursor-pointer"
          >
            Non-Fiction
          </Label>
        </div>
      </div>
    </FilterLayout>
  );
}
