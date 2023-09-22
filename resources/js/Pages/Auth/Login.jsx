import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

import MainLayout from "@/Layouts/MainLayout";
import InputError from "@/Components/InputError";

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
      <Head title="Sign In — Book Store" />

      <div className="min-h-[calc(100vh_-_100px_-_534px)] flex flex-col sm:justify-center items-center py-20 px-4 md:px-0 bg-gray-50 dark:bg-gray-900">
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
              Sign in to your account
            </h1>

            {status && (
              <div className="mb-4 font-medium text-sm text-green-600">
                {status}
              </div>
            )}

            <form className="space-y-4 md:space-y-6" onSubmit={submit}>
              <div>
                <Label htmlFor="email" value="Your Email" />
                <TextInput
                  id="email"
                  type="email"
                  name="email"
                  value={data.email}
                  className="mt-1 block w-full"
                  placeholder="email@example.com"
                  onChange={(e) => setData("email", e.target.value)}
                />
                <InputError message={errors.email} className="-mb-4" />
              </div>
              <div>
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
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Checkbox
                      id="remember"
                      name="remember"
                      checked={data.remember}
                      className="cursor-pointer"
                      onChange={(e) => setData("remember", e.target.checked)}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label
                      className="cursor-pointer font-light text-gray-500"
                      htmlFor="remember"
                      value="Remember me"
                    />
                  </div>
                </div>
                {canResetPassword && (
                  <Link
                    href={route("password.request")}
                    className="text-sm font-medium text-cyan-700 hover:underline dark:text-cyan-600"
                  >
                    Forgot password?
                  </Link>
                )}
              </div>
              <Button fullSized type="submit" disabled={processing}>
                Sign in
              </Button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  href={route("register")}
                  className="font-medium text-cyan-700 hover:underline dark:text-cyan-600"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
