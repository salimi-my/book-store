import { Checkbox, Label } from "flowbite-react";

import FilterLayout from "@/Layouts/FilterLayout";
import ScrollAreaLayout from "@/Layouts/ScrollAreaLayout";

export default function PriceFilter({ handleCheckbox, bookFilter, isMobile }) {
  return (
    <FilterLayout title="Price Range">
      <div className="flex flex-col">
        <ScrollAreaLayout>
          <div className="flex items-center gap-2 w-[200px] pt-3">
            <Checkbox
              id={`0-50${isMobile ? "-mobile" : ""}`}
              value="0-50"
              className="cursor-pointer"
              onChange={(e) => handleCheckbox(e, "price")}
              defaultChecked={
                bookFilter.price && bookFilter.price.split(",").includes("0-50")
              }
            />
            <Label
              htmlFor={`0-50${isMobile ? "-mobile" : ""}`}
              className="truncate font-medium cursor-pointer"
            >
              Under RM50
            </Label>
          </div>
          <div className="flex items-center gap-2 w-[200px]">
            <Checkbox
              id={`50-100${isMobile ? "-mobile" : ""}`}
              value="50-100"
              className="cursor-pointer"
              onChange={(e) => handleCheckbox(e, "price")}
              defaultChecked={
                bookFilter.price &&
                bookFilter.price.split(",").includes("50-100")
              }
            />
            <Label
              htmlFor={`50-100${isMobile ? "-mobile" : ""}`}
              className="truncate font-medium cursor-pointer"
            >
              RM50 - RM100
            </Label>
          </div>
          <div className="flex items-center gap-2 w-[200px]">
            <Checkbox
              id={`100-150${isMobile ? "-mobile" : ""}`}
              value="100-150"
              className="cursor-pointer"
              onChange={(e) => handleCheckbox(e, "price")}
              defaultChecked={
                bookFilter.price &&
                bookFilter.price.split(",").includes("100-150")
              }
            />
            <Label
              htmlFor={`100-150${isMobile ? "-mobile" : ""}`}
              className="truncate font-medium cursor-pointer"
            >
              RM100 - RM150
            </Label>
          </div>
          <div className="flex items-center gap-2 w-[200px]">
            <Checkbox
              id={`150-200${isMobile ? "-mobile" : ""}`}
              value="150-200"
              className="cursor-pointer"
              onChange={(e) => handleCheckbox(e, "price")}
              defaultChecked={
                bookFilter.price &&
                bookFilter.price.split(",").includes("150-200")
              }
            />
            <Label
              htmlFor={`150-200${isMobile ? "-mobile" : ""}`}
              className="truncate font-medium cursor-pointer"
            >
              EM150 - RM200
            </Label>
          </div>
          <div className="flex items-center gap-2 w-[200px]">
            <Checkbox
              id={`200-10000${isMobile ? "-mobile" : ""}`}
              value="200-10000"
              className="cursor-pointer"
              onChange={(e) => handleCheckbox(e, "price")}
              defaultChecked={
                bookFilter.price &&
                bookFilter.price.split(",").includes("200-10000")
              }
            />
            <Label
              htmlFor={`200-10000${isMobile ? "-mobile" : ""}`}
              className="truncate font-medium cursor-pointer"
            >
              Above RM200
            </Label>
          </div>
        </ScrollAreaLayout>
      </div>
    </FilterLayout>
  );
}
