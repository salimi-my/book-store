import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";

import MainLayout from "@/Layouts/MainLayout";
import InputError from "@/Components/InputError";

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    accept: false,
  });

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route("register"));
  };

  return (
    <MainLayout>
      <Head title="Sign Up — Book Store" />

      <div className="min-h-[calc(100vh_-_64px_-_534px)] flex flex-col sm:justify-center items-center py-20 bg-gray-50">
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
              Create and account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submit}>
              <div>
                <Label htmlFor="name" value="Full Name" />
                <TextInput
                  id="name"
                  name="name"
                  value={data.name}
                  className="mt-1 block w-full"
                  placeholder="e.g. John Doe"
                  onChange={(e) => setData("name", e.target.value)}
                />
                <InputError message={errors.name} className="-mb-4" />
              </div>
              <div>
                <Label htmlFor="email" value="Email" />
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
              <div>
                <Label
                  htmlFor="password_confirmation"
                  value="Confirm Password"
                />
                <TextInput
                  id="password_confirmation"
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
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <Checkbox
                    id="terms"
                    name="terms"
                    checked={data.accept}
                    className="cursor-pointer"
                    onChange={(e) => setData("accept", e.target.checked)}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <Label className="cursor-pointer" htmlFor="terms">
                    I accept the{" "}
                    <Link
                      className="font-medium text-cyan-700 hover:underline dark:text-cyan-600"
                      href="#"
                    >
                      Terms and Conditions
                    </Link>
                  </Label>
                </div>
              </div>
              <InputError message={errors.accept} className="!mt-0 -mb-4" />
              <Button fullSized type="submit" disabled={processing}>
                Create an account
              </Button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href={route("login")}
                  className="font-medium text-cyan-700 hover:underline dark:text-cyan-600"
                >
                  Sign in here
                </Link>
              </p>
            </form>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
