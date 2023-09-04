import { Transition } from "@headlessui/react";
import { Button, Label, TextInput } from "flowbite-react";

import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import { CheckCircle } from "lucide-react";

export default function UpdateProfileInformation({ user, className = "" }) {
  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      name: user.name,
      email: user.email,
      phone: user.phone,
    });

  const submit = (e) => {
    e.preventDefault();

    patch(route("profile.update"));
  };

  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900">
          Profile Information
        </h2>

        <p className="mt-1 text-sm text-gray-600">
          Update your account's profile information and email address.
        </p>
      </header>

      <form onSubmit={submit} className="mt-6 space-y-6">
        <Transition
          show={recentlySuccessful}
          enter="transition ease-in-out"
          enterFrom="opacity-0"
          leave="transition ease-in-out"
          leaveTo="opacity-0"
          className="w-full rounded-md bg-green-400 py-4 px-4"
        >
          <p className="flex items-center gap-2 text-sm text-white">
            <CheckCircle />
            Profile successfully updated.
          </p>
        </Transition>
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
          <InputError className="-mb-4" message={errors.name} />
        </div>

        <div>
          <Label htmlFor="email" value="Email" />
          <TextInput
            id="email"
            type="email"
            className="mt-1 block w-full"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            placeholder="Enter your email..."
            required
          />
          <InputError className="-mb-4" message={errors.email} />
        </div>

        <div>
          <Label htmlFor="phone" value="Phone" />
          <TextInput
            id="phone"
            type="text"
            className="mt-1 block w-full"
            value={data.phone}
            onChange={(e) => setData("phone", e.target.value)}
            placeholder="Enter your phone..."
            required
          />
          <InputError className="-mb-4" message={errors.phone} />
        </div>

        <div className="flex items-center pt-1">
          <Button fullSized type="submit" disabled={processing}>
            Save
          </Button>
        </div>
      </form>
    </section>
  );
}
