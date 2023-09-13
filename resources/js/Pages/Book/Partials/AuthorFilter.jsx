import { Checkbox, Label } from "flowbite-react";

import FilterLayout from "@/Layouts/FilterLayout";

export default function AuthorFilter({ handleCheckbox, bookFilter, authors }) {
  return (
    <FilterLayout title="Author">
      <div className="flex flex-col gap-1 p-4">
        {authors.map((author, index) => (
          <div key={index} className="flex items-center gap-2">
            <Checkbox
              id={author.author}
              value={author.author}
              className="cursor-pointer"
              onChange={(e) => handleCheckbox(e, "author")}
              defaultChecked={
                bookFilter.author &&
                bookFilter.author.split(",").includes(author.author)
              }
            />
            <Label
              htmlFor={author.author}
              className="truncate font-medium cursor-pointer"
            >
              {author.author}
            </Label>
          </div>
        ))}
      </div>
    </FilterLayout>
  );
}
