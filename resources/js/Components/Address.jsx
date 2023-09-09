export default function Address({ address, first }) {
  return (
    <div className="flex flex-col">
      {!first && <hr className="my-6" />}
      <div className="flex items-center">
        <p className="pr-2 border-r-2 font-semibold dark:text-white">
          {address.name}
        </p>
        <p className="pl-2 text-gray-500">{address.phone}</p>
      </div>
      <p className="text-gray-500">{address.address},</p>
      <p className="text-gray-500">
        {address.postal_code} {address.city}, {address.state},
      </p>
      <p className="text-gray-500">{address.country}</p>
    </div>
  );
}
