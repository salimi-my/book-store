import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import { Transition } from "@headlessui/react";
import { Button, Label, TextInput } from "flowbite-react";

import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";

export default function UpdatePasswordForm({ className = "" }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();

  const { data, setData, errors, put, reset, processing, recentlySuccessful } =
    useForm({
      current_password: "",
      password: "",
      password_confirmation: "",
    });

  const updatePassword = (e) => {
    e.preventDefault();

    put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => reset(),
      onError: (errors) => {
        if (errors.password) {
          reset("password", "password_confirmation");
          passwordInput.current.focus();
        }

        if (errors.current_password) {
          reset("current_password");
          currentPasswordInput.current.focus();
        }
      },
    });
  };

  return (
    <section className={className}>
      <header>
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
          Update Password
        </h2>

        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Ensure your account is using a long, random password to stay secure.
        </p>
      </header>

      <form onSubmit={updatePassword} className="mt-6 space-y-6">
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
            Password successfully updated.
          </p>
        </Transition>
        <div>
          <Label htmlFor="current_password" value="Current Password" />
          <TextInput
            id="current_password"
            ref={currentPasswordInput}
            value={data.current_password}
            onChange={(e) => setData("current_password", e.target.value)}
            type="password"
            placeholder="Enter current password..."
            className="mt-1 block w-full"
          />
          <InputError message={errors.current_password} className="-mb-4" />
        </div>

        <div>
          <Label htmlFor="password" value="New Password" />
          <TextInput
            id="password"
            ref={passwordInput}
            value={data.password}
            onChange={(e) => setData("password", e.target.value)}
            type="password"
            placeholder="Enter new password..."
            className="mt-1 block w-full"
          />
          <InputError message={errors.password} className="-mb-4" />
        </div>

        <div>
          <Label htmlFor="password_confirmation" value="Confirm Password" />
          <TextInput
            id="password_confirmation"
            value={data.password_confirmation}
            onChange={(e) => setData("password_confirmation", e.target.value)}
            type="password"
            placeholder="Enter confirm password..."
            className="mt-1 block w-full"
          />
          <InputError
            message={errors.password_confirmation}
            className="-mb-4"
          />
        </div>

        <div className="flex items-center pt-1">
          <Button fullSized type="submit" disabled={processing}>
            Update Password
          </Button>
        </div>
      </form>
    </section>
  );
}
