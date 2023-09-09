import AddressDefault from "@/Pages/Address/Partials/AddressDefault";
import { Button } from "flowbite-react";
import { PenSquare, RefreshCw, Trash } from "lucide-react";

export default function Address({ address, first }) {
  return (
    <div className="flex flex-col">
      {!first && <hr className="my-6" />}
      <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0">
        <div className="flex space-x-1 md:order-2">
          <AddressDefault address={address} />
          <Button className="px-0" color="light" size="xs">
            <PenSquare className="w-4 h-4" />
          </Button>
          <Button className="px-0" color="failure" size="xs">
            <Trash className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center">
          <p className="pr-2 border-r-2 font-semibold dark:text-white">
            {address.name}
          </p>
          <p className="pl-2 text-gray-500">{address.phone}</p>
        </div>
      </div>
      <p className="text-gray-500 text-sm">{address.address},</p>
      <p className="text-gray-500 text-sm">
        {address.postal_code} {address.city}, {address.state},
      </p>
      <p className="text-gray-500 text-sm">{address.country}</p>
      {address.default === "yes" && (
        <div className="inline-flex mt-2">
          <p className="text-sm border text-cyan-700 border-cyan-700 px-1 rounded-md">
            Default
          </p>
        </div>
      )}
    </div>
  );
}
