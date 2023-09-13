import { Checkbox, Label } from "flowbite-react";

import FilterLayout from "@/Layouts/FilterLayout";

export default function PublisherFilter({
  handleCheckbox,
  bookFilter,
  publishers,
}) {
  return (
    <FilterLayout title="Publisher">
      <div className="flex flex-col gap-1 p-4">
        {publishers.map((publisher, index) => (
          <div key={index} className="flex items-center gap-2 w-[193px]">
            <Checkbox
              id={publisher.publisher}
              value={publisher.publisher}
              className="cursor-pointer"
              onChange={(e) => handleCheckbox(e, "publisher")}
              defaultChecked={
                bookFilter.publisher &&
                bookFilter.publisher.split(",").includes(publisher.publisher)
              }
            />
            <Label
              htmlFor={publisher.publisher}
              className="truncate font-medium cursor-pointer"
            >
              {publisher.publisher}
            </Label>
          </div>
        ))}
      </div>
    </FilterLayout>
  );
}
