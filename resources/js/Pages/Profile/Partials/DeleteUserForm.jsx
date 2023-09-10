import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import { Button, Label, TextInput } from "flowbite-react";

import Modal from "@/Components/Modal";
import InputError from "@/Components/InputError";

export default function DeleteUserForm({ className = "" }) {
  const passwordInput = useRef();
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);

  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
  } = useForm({
    password: "",
  });

  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };

  const deleteUser = (e) => {
    e.preventDefault();

    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset(),
    });
  };

  const closeModal = () => {
    setConfirmingUserDeletion(false);

    reset();
  };

  return (
    <section className={`space-y-6 ${className}`}>
      <header>
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">
          Delete Account
        </h2>

        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Once your account is deleted, all of its resources and data will be
          permanently deleted. Before deleting your account, please download any
          data or information that you wish to retain.
        </p>
      </header>

      <Button
        fullSized
        color="failure"
        type="button"
        onClick={confirmUserDeletion}
      >
        Delete Account
      </Button>

      <Modal show={confirmingUserDeletion} onClose={closeModal}>
        <form onSubmit={deleteUser} className="p-6">
          <h2 className="text-lg font-medium text-gray-900 dark:text-white">
            Are you sure you want to delete your account?
          </h2>

          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Once account is deleted, all of its resources and data will be
            permanently deleted. Please enter your password to confirm you would
            like to permanently delete your account.
          </p>

          <div className="mt-6">
            <Label htmlFor="password" value="Password" className="sr-only" />
            <TextInput
              id="password"
              type="password"
              name="password"
              ref={passwordInput}
              value={data.password}
              onChange={(e) => setData("password", e.target.value)}
              className="mt-1 w-full"
              placeholder="Enter your password..."
            />
            <InputError message={errors.password} className="mt-2" />
          </div>

          <div className="mt-6 flex justify-end">
            <Button color="light" type="button" onClick={closeModal}>
              Cancel
            </Button>
            <Button
              color="failure"
              type="submit"
              className="ml-3"
              disabled={processing}
            >
              Delete Account
            </Button>
          </div>
        </form>
      </Modal>
    </section>
  );
}
