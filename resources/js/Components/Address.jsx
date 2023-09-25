import AddressForm from "@/Pages/Address/Partials/AddressForm";
import AddressDelete from "@/Pages/Address/Partials/AddressDelete";
import AddressDefault from "@/Pages/Address/Partials/AddressDefault";

export default function Address({ address, countries, first }) {
  return (
    <div className="flex flex-col">
      {!first && <hr className="my-6 border-gray-300 dark:border-gray-600" />}
      <div className="flex flex-col md:flex-row justify-between space-y-2 md:space-y-0">
        <div className="flex space-x-1 md:order-2">
          <AddressDefault address={address} />
          <AddressForm address={address} countries={countries} />
          <AddressDelete address={address} />
        </div>
        <div className="flex items-center">
          <p className="pr-2 border-r border-gray-300 dark:border-gray-600 font-semibold dark:text-white">
            {address.name}
          </p>
          <p className="pl-2 text-gray-500 dark:text-gray-400">
            {address.phone}
          </p>
        </div>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        {address.address},
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        {address.postal_code} {address.city}, {address.state},
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        {address.country}
      </p>
      {address.default === "yes" && (
        <div className="inline-flex mt-2">
          <p className="text-sm border text-cyan-700 dark:text-cyan-400 border-cyan-700 dark:border-cyan-400 px-1 rounded-md">
            Default
          </p>
        </div>
      )}
    </div>
  );
}
