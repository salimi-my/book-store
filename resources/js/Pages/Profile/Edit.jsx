import { Card } from "flowbite-react";
import { Head } from "@inertiajs/react";

import MainLayout from "@/Layouts/MainLayout";
import ProfileLayout from "@/Layouts/ProfileLayout";
import DeleteUserForm from "@/Pages/Profile/Partials/DeleteUserForm";
import UpdatePasswordForm from "@/Pages/Profile/Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "@/Pages/Profile/Partials/UpdateProfileInformationForm";

export default function Edit({ mustVerifyEmail, status }) {
  return (
    <MainLayout>
      <Head title="My Profile — Book Store" />

      <ProfileLayout>
        <div className="flex flex-col space-y-6">
          <Card className="w-full bg-white rounded-lg shadow dark:border md:mt-0 dark:bg-gray-800 dark:border-gray-700">
            <UpdateProfileInformationForm
              mustVerifyEmail={mustVerifyEmail}
              status={status}
              className="w-full p-2"
            />
          </Card>

          <Card className="w-full bg-white rounded-lg shadow dark:border md:mt-0 dark:bg-gray-800 dark:border-gray-700">
            <UpdatePasswordForm className="w-full p-2" />
          </Card>

          <Card className="w-full bg-white rounded-lg shadow dark:border md:mt-0 dark:bg-gray-800 dark:border-gray-700">
            <DeleteUserForm className="w-full p-2" />
          </Card>
        </div>
      </ProfileLayout>
    </MainLayout>
  );
}
