import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Alert, Card } from "flowbite-react";
import { Head, usePage } from "@inertiajs/react";

import Address from "@/Components/Address";
import MainLayout from "@/Layouts/MainLayout";
import ProfileLayout from "@/Layouts/ProfileLayout";
import AddressForm from "@/Pages/Address/Partials/AddressForm";

export default function Index({ addresses, countries }) {
  const { flash } = usePage().props;
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    if (flash.message) {
      setAlert(true);
    }
  }, [flash]);

  return (
    <MainLayout>
      <Head title="My Addresses — Book Store" />

      <ProfileLayout>
        {alert && (
          <Alert
            color="success"
            className="mb-4"
            onDismiss={() => setAlert(false)}
          >
            <span>
              <p className="flex items-center font-medium">
                <CheckCircle className="mr-2" />
                {flash.message}
              </p>
            </span>
          </Alert>
        )}
        <Card className="w-full bg-white rounded-lg shadow dark:border md:mt-0 dark:bg-gray-800 dark:border-gray-700">
          <section className="w-full p-2">
            <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
              <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  My Addresses
                </h2>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  These are your account's addresses details.
                </p>
              </header>
              <AddressForm countries={countries} />
            </div>

            {addresses.length > 0 && (
              <div className="flex flex-col mt-10">
                {addresses.map((address, index) => (
                  <Address
                    key={address.id}
                    address={address}
                    countries={countries}
                    first={index === 0}
                  />
                ))}
              </div>
            )}

            {addresses.length < 1 && (
              <div className="flex flex-col mt-10">
                <p className="text-gray-900 dark:text-white font-medium">
                  There are no addresses currently.
                </p>
              </div>
            )}
          </section>
        </Card>
      </ProfileLayout>
    </MainLayout>
  );
}
