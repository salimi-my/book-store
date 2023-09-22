import { Head, Link, useForm } from "@inertiajs/react";
import { Button, Card, TextInput } from "flowbite-react";

import MainLayout from "@/Layouts/MainLayout";
import InputError from "@/Components/InputError";

export default function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
  });

  const submit = (e) => {
    e.preventDefault();

    post(route("password.email"));
  };

  return (
    <MainLayout>
      <Head title="Forgot Password — Book Store" />

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
            <div className="mb-4 text-sm text-gray-600 dark:text-gray-300">
              Forgot your password? No problem. Just let us know your email
              address and we will email you a password reset link that will
              allow you to choose a new one.
            </div>
            {status && (
              <div className="mb-4 font-medium text-sm text-green-600">
                {status}
              </div>
            )}
            <form onSubmit={submit}>
              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="mt-1 block w-full"
                placeholder="e.g. email@example.com"
                onChange={(e) => setData("email", e.target.value)}
              />
              <InputError message={errors.email} className="mt-2" />
              <div className="flex items-center justify-end mt-4">
                <Button fullSized type="submit" disabled={processing}>
                  Email Password Reset Link
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}
