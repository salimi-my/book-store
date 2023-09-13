import { Checkbox, Label } from "flowbite-react";

import FilterLayout from "@/Layouts/FilterLayout";

export default function CategoryFilter({
  handleCheckbox,
  bookFilter,
  categories,
}) {
  return (
    <FilterLayout title="Category">
      <div className="flex flex-col gap-1 p-3">
        {categories.map((category) => (
          <div key={category.id} className="flex items-center gap-2">
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
