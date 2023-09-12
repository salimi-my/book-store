import { router } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { Checkbox, Label } from "flowbite-react";

import FilterLayout from "@/Layouts/FilterLayout";

export default function TypeFilter({ filters }) {
  const [bookFilter, setBookFilter] = useState({
    type: filters.type ?? "",
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

  useEffect(() => {
    router.get(route("book.index"), bookFilter, {
      preserveState: true,
      preserveScroll: true,
    });
  }, [bookFilter]);

  return (
    <FilterLayout title="Type">
      <div className="flex flex-col gap-1 p-3">
        <div className="flex items-center gap-2">
          <Checkbox
            id="fiction"
            value="fiction"
            onChange={(e) => handleCheckbox(e)}
          />
          <Label htmlFor="fiction" className="truncate font-medium">
            Fiction
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            id="non-fiction"
            value="non-fiction"
            onChange={(e) => handleCheckbox(e)}
          />
          <Label htmlFor="non-fiction" className="truncate font-medium">
            Non-Fiction
          </Label>
        </div>
      </div>
    </FilterLayout>
  );
}
