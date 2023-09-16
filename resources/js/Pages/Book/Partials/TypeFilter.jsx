import { Checkbox, Label } from "flowbite-react";

import FilterLayout from "@/Layouts/FilterLayout";
import ScrollAreaLayout from "@/Layouts/ScrollAreaLayout";

export default function TypeFilter({ handleCheckbox, bookFilter, isMobile }) {
  return (
    <FilterLayout title="Type">
      <div className="flex flex-col">
        <ScrollAreaLayout>
          <div className="flex items-center gap-2 w-[200px] pt-3">
            <Checkbox
              id={`fiction${isMobile ? "-mobile" : ""}`}
              value="fiction"
              className="cursor-pointer"
              onChange={(e) => handleCheckbox(e, "type")}
              defaultChecked={
                bookFilter.type &&
                bookFilter.type.split(",").includes("fiction")
              }
            />
            <Label
              htmlFor={`fiction${isMobile ? "-mobile" : ""}`}
              className="truncate font-medium cursor-pointer"
            >
              Fiction
            </Label>
          </div>
          <div className="flex items-center gap-2 w-[200px]">
            <Checkbox
              id={`non-fiction${isMobile ? "-mobile" : ""}`}
              value="non-fiction"
              className="cursor-pointer"
              onChange={(e) => handleCheckbox(e, "type")}
              defaultChecked={
                bookFilter.type &&
                bookFilter.type.split(",").includes("non-fiction")
              }
            />
            <Label
              htmlFor={`non-fiction${isMobile ? "-mobile" : ""}`}
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
