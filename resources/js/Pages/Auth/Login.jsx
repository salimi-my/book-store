import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";

import Checkbox from "@/Components/Checkbox";
import MainLayout from "@/Layouts/MainLayout";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route("login"));
  };

  return (
    <MainLayout>
      <Head title="Log in" />

      <div className="min-h-[calc(100vh_-_64px_-_534px)] flex flex-col sm:justify-center items-center py-20 bg-gray-50">
        <div>
          <Link href="/">
            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
          </Link>
        </div>

        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
          {status && (
            <div className="mb-4 font-medium text-sm text-green-600">
              {status}
            </div>
          )}

          <form onSubmit={submit}>
            <div>
              <InputLabel htmlFor="email" value="Email" />

              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="mt-1 block w-full"
                autoComplete="username"
                isFocused={true}
                onChange={(e) => setData("email", e.target.value)}
              />

              <InputError message={errors.email} className="mt-2" />
            </div>

            <div className="mt-4">
              <InputLabel htmlFor="password" value="Password" />

              <TextInput
                id="password"
                type="password"
                name="password"
                value={data.password}
                className="mt-1 block w-full"
                autoComplete="current-password"
                onChange={(e) => setData("password", e.target.value)}
              />

              <InputError message={errors.password} className="mt-2" />
            </div>

            <div className="block mt-4">
              <label className="flex items-center">
                <Checkbox
                  name="remember"
                  checked={data.remember}
                  onChange={(e) => setData("remember", e.target.checked)}
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
            </div>

            <div className="flex items-center justify-end mt-4">
              {canResetPassword && (
                <Link
                  href={route("password.request")}
                  className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Forgot your password?
                </Link>
              )}

              <PrimaryButton className="ml-4" disabled={processing}>
                Log in
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
