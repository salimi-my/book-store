import { Head, Link, useForm } from "@inertiajs/react";

import MainLayout from "@/Layouts/MainLayout";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import ApplicationLogo from "@/Components/ApplicationLogo";

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
      <Head title="Forgot Password" />

      <div className="min-h-[calc(100vh_-_64px_-_534px)] flex flex-col sm:justify-center items-center py-6 bg-gray-50">
        <div>
          <Link href="/">
            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
          </Link>
        </div>

        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
          <div className="mb-4 text-sm text-gray-600">
            Forgot your password? No problem. Just let us know your email
            address and we will email you a password reset link that will allow
            you to choose a new one.
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
              isFocused={true}
              onChange={(e) => setData("email", e.target.value)}
            />

            <InputError message={errors.email} className="mt-2" />

            <div className="flex items-center justify-end mt-4">
              <PrimaryButton className="ml-4" disabled={processing}>
                Email Password Reset Link
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
