import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { Camera, CheckCircle } from "lucide-react";
import { Button, Label, TextInput } from "flowbite-react";

import InputError from "@/Components/InputError";

export default function UpdateProfileInformation({ user, className = "" }) {
  const filePicker = useRef(null);
  const [showAvatar, setShowAvatar] = useState(null);
  const { post, reset, setData, data, errors, processing, recentlySuccessful } =
    useForm({
      avatar: null,
      name: user.name,
      email: user.email,
      phone: user.phone,
    });

  const submit = (e) => {
    e.preventDefault();

    post(route("profile.update"), {
      onSuccess: () => {
        setShowAvatar(null);
        reset("avatar");
      },
    });
  };

  const addFile = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setData("avatar", e.target.files[0]);
      setShowAvatar(readerEvent.target.result);
    };
  };

  const resetAvatar = () => {
    setShowAvatar(null);
    reset("avatar");
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

      <form
        onSubmit={submit}
        className="mt-6 space-y-6"
        encType="multipart/form-data"
      >
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

        <div className="flex flex-col items-center">
          <div
            onClick={() => filePicker.current.click()}
            className="relative group"
          >
            {!showAvatar && (
              <img
                className="w-24 h-24 rounded-full shadow-md object-cover group-hover:brightness-50 cursor-pointer"
                src={user.avatar ? user.src : "/avatar.svg"}
                alt="user photo"
              />
            )}
            {showAvatar && (
              <img
                className="w-24 h-24 rounded-full shadow-md object-cover group-hover:brightness-50 cursor-pointer"
                src={showAvatar}
                alt="user photo"
              />
            )}
            <div className="absolute top-9 left-5 hidden group-hover:flex justify-center items-center cursor-pointer">
              <p className="font-medium text-white">Change</p>
            </div>
            <div className="absolute right-1 bottom-1 w-5 h-5 p-1 bg-gray-300 rounded-full flex justify-center items-center ring-2 ring-white cursor-pointer">
              <Camera className="text-gray-600" />
            </div>
          </div>
          {showAvatar && (
            <button
              onClick={resetAvatar}
              type="button"
              className="mt-3 text-cyan-700 hover:text-white border border-cyan-700 hover:bg-cyan-700 focus:ring-2 focus:outline-none focus:ring-cyan-300 font-medium rounded-full text-sm px-5 py-1 text-center dark:border-cyan-500 dark:text-cyan-500 dark:hover:text-white dark:hover:bg-cyan-500 dark:focus:ring-cyan-800"
            >
              Remove
            </button>
          )}
          <input
            ref={filePicker}
            onChange={addFile}
            type="file"
            name="avatar"
            hidden
          />
          <InputError className="-mb-4" message={errors.avatar} />
        </div>

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
