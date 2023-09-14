import { Checkbox, Label } from "flowbite-react";

import FilterLayout from "@/Layouts/FilterLayout";
import ScrollAreaLayout from "@/Layouts/ScrollAreaLayout";

export default function TypeFilter({ handleCheckbox, bookFilter }) {
  return (
    <FilterLayout title="Type">
      <div className="flex flex-col">
        <ScrollAreaLayout>
          <div className="flex items-center gap-2 w-[193px] pt-3">
            <Checkbox
              id="fiction"
              value="fiction"
              className="cursor-pointer"
              onChange={(e) => handleCheckbox(e, "type")}
              defaultChecked={
                bookFilter.type &&
                bookFilter.type.split(",").includes("fiction")
              }
            />
            <Label
              htmlFor="fiction"
              className="truncate font-medium cursor-pointer"
            >
              Fiction
            </Label>
          </div>
          <div className="flex items-center gap-2 w-[193px]">
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
        </ScrollAreaLayout>
      </div>
    </FilterLayout>
  );
}
