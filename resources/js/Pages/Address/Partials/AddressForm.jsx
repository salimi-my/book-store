import { useState } from "react";
import { Plus } from "lucide-react";
import { useForm } from "@inertiajs/react";
import { Button, Label, Select, TextInput } from "flowbite-react";

import Modal from "@/Components/Modal";
import InputError from "@/Components/InputError";

export default function AddressForm({ address, countries }) {
  const [openModal, setOpenModal] = useState(false);

  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    phone: "",
    address: "",
    city: "",
    postal_code: "",
    state: "",
    country: "",
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("address.store"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onFinish: () => reset(),
    });
  };

  const closeModal = () => {
    setOpenModal(false);
    reset();
  };

  return (
    <>
      <Button type="button" onClick={() => setOpenModal(true)}>
        <span className="flex items-center">
          <Plus className="mr-1" />
          Add New Address
        </span>
      </Button>

      <Modal show={openModal} onClose={closeModal}>
        <form onSubmit={submit} className="p-6 space-y-4">
          <header>
            <h2 className="text-lg font-medium text-gray-900">
              Add New Address
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Add new address for your account.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name" value="Full Name" />
              <TextInput
                id="name"
                className="mt-1 block w-full"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                placeholder="Enter your name..."
                required
              />
              <InputError message={errors.name} className="-mb-4" />
            </div>
            <div>
              <Label htmlFor="phone" value="Phone Number" />
              <TextInput
                id="phone"
                name="phone"
                value={data.phone}
                className="mt-1 block w-full"
                placeholder="Enter your phone number..."
                onChange={(e) => setData("phone", e.target.value)}
              />
              <InputError message={errors.phone} className="-mb-4" />
            </div>
          </div>

          <div>
            <Label htmlFor="address" value="Address" />
            <TextInput
              id="address"
              name="address"
              value={data.address}
              className="mt-1 block w-full"
              placeholder="Enter your address..."
              onChange={(e) => setData("address", e.target.value)}
            />
            <InputError message={errors.address} className="-mb-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city" value="City" />
              <TextInput
                id="city"
                className="mt-1 block w-full"
                value={data.city}
                onChange={(e) => setData("city", e.target.value)}
                placeholder="Enter your city..."
                required
              />
              <InputError message={errors.city} className="-mb-4" />
            </div>
            <div>
              <Label htmlFor="postal_code" value="Postal Code" />
              <TextInput
                id="postal_code"
                name="postal_code"
                value={data.postal_code}
                className="mt-1 block w-full"
                placeholder="Enter your postal code..."
                onChange={(e) => setData("postal_code", e.target.value)}
              />
              <InputError message={errors.postal_code} className="-mb-4" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="state" value="State" />
              <TextInput
                id="state"
                className="mt-1 block w-full"
                value={data.state}
                onChange={(e) => setData("state", e.target.value)}
                placeholder="Enter your state..."
                required
              />
              <InputError message={errors.state} className="-mb-4" />
            </div>
            <div>
              <Label htmlFor="country" value="Country" />
              <Select
                id="country"
                name="country"
                className="mt-1 block w-full"
                onChange={(e) => setData("country", e.target.value)}
                defaultValue={data.country ? data.country : "Select country"}
              >
                <option value="Select country" disabled>
                  Select country
                </option>
                {countries.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </Select>
              <InputError message={errors.country} className="-mb-4" />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <Button color="light" type="button" onClick={closeModal}>
              Cancel
            </Button>
            <Button type="submit" className="ml-3" disabled={processing}>
              Submit
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
