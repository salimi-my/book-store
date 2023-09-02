import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Label, TextInput } from "flowbite-react";

import MainLayout from "@/Layouts/MainLayout";
import InputError from "@/Components/InputError";

export default function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token: token,
    email: email,
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route("password.store"));
  };

  return (
    <MainLayout>
      <Head title="Reset Password — Book Store" />

      <div className="min-h-[calc(100vh_-_64px_-_534px)] flex flex-col sm:justify-center items-center py-20 px-4 md:px-0 bg-gray-50 dark:bg-gray-900">
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-bold text-cyan-700 dark:text-white"
        >
          <img
            className="w-10 h-10 mr-2"
            src="/book-store.png"
            alt="book store logo"
          />
          Book Store
        </Link>

        <Card className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-2 space-y-4 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Reset password
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submit}>
              <div>
                <Label htmlFor="email" value="Email" />
                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  value={data.email}
                  className="mt-1 block w-full"
                  placeholder="e.g. email@example.com"
                  onChange={(e) => setData("email", e.target.value)}
                />
                <InputError message={errors.email} className="-mb-4" />
              </div>
              <div className="mt-4">
                <Label htmlFor="password" value="Password" />
                <TextInput
                  id="password"
                  type="password"
                  name="password"
                  value={data.password}
                  className="mt-1 block w-full"
                  placeholder="••••••••"
                  onChange={(e) => setData("password", e.target.value)}
                />
                <InputError message={errors.password} className="-mb-4" />
              </div>
              <div className="mt-4">
                <Label
                  htmlFor="password_confirmation"
                  value="Confirm Password"
                />
                <TextInput
                  type="password"
                  name="password_confirmation"
                  value={data.password_confirmation}
                  className="mt-1 block w-full"
                  placeholder="••••••••"
                  onChange={(e) =>
                    setData("password_confirmation", e.target.value)
                  }
                />
                <InputError
                  message={errors.password_confirmation}
                  className="-mb-4"
                />
              </div>
              <div className="flex items-center justify-end mt-4">
                <Button fullSized type="submit" disabled={processing}>
                  Reset Password
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
