import { Label, Select } from "flowbite-react";

export default function SortBy({ handleSelect, bookFilter }) {
  return (
    <div className="flex items-center space-x-3">
      <Label htmlFor="sort" value="Sort by:" />
      <Select
        id="sort"
        sizing="sm"
        className="cursor-pointer"
        onChange={(e) => handleSelect(e)}
        defaultValue={bookFilter.sort ? bookFilter.sort : ""}
      >
        <option value="">Best Match</option>
        <option value="price,asc">Price: Low to High</option>
        <option value="price,desc">Price: High to Low</option>
        <option value="title,asc">Alphabet: A to Z</option>
        <option value="title,desc">Alphabet: Z to A</option>
      </Select>
    </div>
  );
}
