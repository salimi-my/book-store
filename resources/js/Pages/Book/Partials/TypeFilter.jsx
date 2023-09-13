import { Checkbox, Label } from "flowbite-react";

import FilterLayout from "@/Layouts/FilterLayout";

export default function TypeFilter({ handleCheckbox, bookFilter }) {
  return (
    <FilterLayout title="Type">
      <div className="flex flex-col gap-1 p-3">
        <div className="flex items-center gap-2">
          <Checkbox
            id="fiction"
            value="fiction"
            className="cursor-pointer"
            onChange={(e) => handleCheckbox(e, "type")}
            defaultChecked={
              bookFilter.type && bookFilter.type.split(",").includes("fiction")
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
            onChange={(e) => handleCheckbox(e, "type")}
            defaultChecked={
              bookFilter.type &&
              bookFilter.type.split(",").includes("non-fiction")
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
