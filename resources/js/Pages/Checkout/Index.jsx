import { ChevronLeft, Landmark, Truck } from "lucide-react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { Button, Label, Radio, Select, TextInput } from "flowbite-react";

import InputError from "@/Components/InputError";
import CheckoutTotal from "@/Pages/Checkout/Partials/CheckoutTotal";
import IndexBreadcrumb from "@/Pages/Checkout/Breadcrumb/IndexBreadcrumb";

export default function Index({ addresses, countries }) {
  const { auth, carts } = usePage().props;

  const { data, setData, post, processing, errors } = useForm({
    address_id: addresses[0].default === "yes" ? "0" : "New Address",
    shipping_name: addresses[0].default === "yes" ? addresses[0].name : "",
    shipping_phone: addresses[0].default === "yes" ? addresses[0].phone : "",
    shipping_address:
      addresses[0].default === "yes" ? addresses[0].address : "",
    shipping_city: addresses[0].default === "yes" ? addresses[0].city : "",
    shipping_postal_code:
      addresses[0].default === "yes" ? addresses[0].postal_code : "",
    shipping_state: addresses[0].default === "yes" ? addresses[0].state : "",
    shipping_country:
      addresses[0].default === "yes" ? addresses[0].country : "",
  });

  const handleAddressChange = (e) => {
    if (e.target.value === "New Address") {
      setData((data) => ({ ...data, address_id: e.target.value }));
      setData((data) => ({ ...data, shipping_name: "" }));
      setData((data) => ({ ...data, shipping_phone: "" }));
      setData((data) => ({ ...data, shipping_address: "" }));
      setData((data) => ({ ...data, shipping_city: "" }));
      setData((data) => ({ ...data, shipping_postal_code: "" }));
      setData((data) => ({ ...data, shipping_state: "" }));
      setData((data) => ({ ...data, shipping_country: "Select country" }));
    } else {
      setData((data) => ({
        ...data,
        address_id: e.target.value,
      }));
      setData((data) => ({
        ...data,
        shipping_name: addresses[e.target.value].name,
      }));
      setData((data) => ({
        ...data,
        shipping_phone: addresses[e.target.value].phone,
      }));
      setData((data) => ({
        ...data,
        shipping_address: addresses[e.target.value].address,
      }));
      setData((data) => ({
        ...data,
        shipping_city: addresses[e.target.value].city,
      }));
      setData((data) => ({
        ...data,
        shipping_postal_code: addresses[e.target.value].postal_code,
      }));
      setData((data) => ({
        ...data,
        shipping_state: addresses[e.target.value].state,
      }));
      setData((data) => ({
        ...data,
        shipping_country: addresses[e.target.value].country,
      }));
    }
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("order.store"), {
      preserveScroll: true,
    });
  };

  return (
    <>
      <Head>
        <title>Checkout — Book Store</title>
        <meta
          name="description"
          content="Buy books online from the No. 1 Online Bookstore in Malaysia! Enjoy fast & free shipping with min. spend, book deals & exclusive discounts."
        />
      </Head>

      <div className="grid lg:grid-cols-2 min-h-screen">
        <div className="bg-white dark:bg-gray-900 order-2 lg:order-1">
          <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto py-16 px-10">
            <div className="flex flex-col">
              <h1 className="font-medium text-xl text-gray-900 dark:text-white">
                Checkout
              </h1>
              <IndexBreadcrumb />
              <h2 className="font-medium pt-3 text-gray-900 dark:text-white">
                Account Information
              </h2>
              <div className="flex items-center space-x-4 pt-3 text-gray-900 dark:text-white">
                <img
                  className="w-16 h-16 rounded-full shadow-sm object-cover"
                  src={`${auth.user.avatar ? auth.user.src : "/avatar.svg"}`}
                  alt="user photo"
                />
                <div className="text-sm">
                  <p className="font-medium">{auth.user.name}</p>
                  <p>{auth.user.email}</p>
                </div>
              </div>

              <form onSubmit={submit} className="space-y-4">
                <h2 className="font-medium pt-8 text-gray-900 dark:text-white">
                  Collection Method
                </h2>
                <div className="flex items-center gap-3 border bg-gray-50 border-gray-300 dark:border-gray-600 dark:bg-gray-700 p-3 rounded-lg">
                  <Radio
                    defaultChecked
                    id="shipping"
                    name="collection_method"
                    value="Shipping"
                  />
                  <Label htmlFor="shipping">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-100 font-normal">
                      <Truck />
                      Shipping
                    </div>
                  </Label>
                </div>

                <h2 className="font-medium pt-4 text-gray-900 dark:text-white">
                  Shipping Address
                </h2>
                <div>
                  <Select
                    required
                    name="address_id"
                    className="mt-1 block w-full"
                    onChange={(e) => handleAddressChange(e)}
                    value={data.address_id ? data.address_id : "New Address"}
                  >
                    <option value="New Address">New Address</option>
                    {addresses.map((item, index) => (
                      <option key={item.id} value={index}>
                        {item.address +
                          ", " +
                          item.postal_code +
                          " " +
                          item.city +
                          ", " +
                          item.state +
                          ", " +
                          item.country}
                      </option>
                    ))}
                  </Select>
                  <InputError message={errors.address_id} className="-mb-4" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="shipping_name" value="Full Name" />
                    <TextInput
                      required
                      id="shipping_name"
                      className="mt-1 block w-full"
                      value={data.shipping_name}
                      onChange={(e) => {
                        if (data.address_id !== "New Address") {
                          setData((data) => ({
                            ...data,
                            address_id: "New Address",
                          }));
                        }
                        setData((data) => ({
                          ...data,
                          shipping_name: e.target.value,
                        }));
                      }}
                      placeholder="Enter your name..."
                    />
                    <InputError
                      message={errors.shipping_name}
                      className="-mb-4"
                    />
                  </div>
                  <div>
                    <Label htmlFor="shipping_phone" value="Phone Number" />
                    <TextInput
                      required
                      id="shipping_phone"
                      name="shipping_phone"
                      value={data.shipping_phone}
                      className="mt-1 block w-full"
                      placeholder="Enter your phone number..."
                      onChange={(e) => {
                        if (data.address_id !== "New Address") {
                          setData((data) => ({
                            ...data,
                            address_id: "New Address",
                          }));
                        }
                        setData((data) => ({
                          ...data,
                          shipping_phone: e.target.value,
                        }));
                      }}
                    />
                    <InputError
                      message={errors.shipping_phone}
                      className="-mb-4"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="shipping_address" value="Address" />
                  <TextInput
                    required
                    id="shipping_address"
                    name="shipping_address"
                    value={data.shipping_address}
                    className="mt-1 block w-full"
                    placeholder="Enter your address..."
                    onChange={(e) => {
                      if (data.address_id !== "New Address") {
                        setData((data) => ({
                          ...data,
                          address_id: "New Address",
                        }));
                      }
                      setData((data) => ({
                        ...data,
                        shipping_address: e.target.value,
                      }));
                    }}
                  />
                  <InputError
                    message={errors.shipping_address}
                    className="-mb-4"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="shipping_city" value="City" />
                    <TextInput
                      required
                      id="shipping_city"
                      className="mt-1 block w-full"
                      value={data.shipping_city}
                      placeholder="Enter your city..."
                      onChange={(e) => {
                        if (data.address_id !== "New Address") {
                          setData((data) => ({
                            ...data,
                            address_id: "New Address",
                          }));
                        }
                        setData((data) => ({
                          ...data,
                          shipping_city: e.target.value,
                        }));
                      }}
                    />
                    <InputError
                      message={errors.shipping_city}
                      className="-mb-4"
                    />
                  </div>
                  <div>
                    <Label htmlFor="shipping_postal_code" value="Postal Code" />
                    <TextInput
                      required
                      id="shipping_postal_code"
                      name="shipping_postal_code"
                      value={data.shipping_postal_code}
                      className="mt-1 block w-full"
                      placeholder="Enter your postal code..."
                      onChange={(e) => {
                        if (data.address_id !== "New Address") {
                          setData((data) => ({
                            ...data,
                            address_id: "New Address",
                          }));
                        }
                        setData((data) => ({
                          ...data,
                          shipping_postal_code: e.target.value,
                        }));
                      }}
                    />
                    <InputError
                      message={errors.shipping_postal_code}
                      className="-mb-4"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="shipping_state" value="State" />
                    <TextInput
                      required
                      id="shipping_state"
                      name="shipping_state"
                      className="mt-1 block w-full"
                      value={data.shipping_state}
                      placeholder="Enter your state..."
                      onChange={(e) => {
                        if (data.address_id !== "New Address") {
                          setData((data) => ({
                            ...data,
                            address_id: "New Address",
                          }));
                        }
                        setData((data) => ({
                          ...data,
                          shipping_state: e.target.value,
                        }));
                      }}
                    />
                    <InputError
                      message={errors.shipping_state}
                      className="-mb-4"
                    />
                  </div>
                  <div>
                    <Label htmlFor="shipping_country" value="Country" />
                    <Select
                      required
                      id="shipping_country"
                      name="shipping_country"
                      className="mt-1 block w-full"
                      value={
                        data.shipping_country
                          ? data.shipping_country
                          : "Select country"
                      }
                      onChange={(e) => {
                        if (data.address_id !== "New Address") {
                          setData((data) => ({
                            ...data,
                            address_id: "New Address",
                          }));
                        }
                        setData((data) => ({
                          ...data,
                          shipping_country: e.target.value,
                        }));
                      }}
                    >
                      <option value="Select country">Select country</option>
                      {countries.map((item) => (
                        <option key={item.id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </Select>
                    <InputError
                      message={errors.shipping_country}
                      className="-mb-4"
                    />
                  </div>
                </div>

                <h2 className="font-medium pt-4 text-gray-900 dark:text-white">
                  Payment Method
                </h2>
                <div className="flex items-center gap-3 border bg-gray-50 border-gray-300 dark:border-gray-600 dark:bg-gray-700 p-3 rounded-lg">
                  <Radio
                    defaultChecked
                    id="fpx"
                    name="payment_method"
                    value="Online Banking (FPX)"
                  />
                  <Label htmlFor="fpx">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-100 font-normal">
                      <Landmark />
                      Online Banking (FPX)
                    </div>
                  </Label>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <Link
                    href={route("cart.index")}
                    className="flex items-center text-sm hover:underline text-cyan-700 hover:text-cyan-800 dark:text-cyan-600 dark:hover:text-cyan-700"
                  >
                    <ChevronLeft className="-ml-1.5" />
                    Return to cart
                  </Link>
                  <Button type="submit" disabled={processing}>
                    Pay Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bg-slate-50 dark:bg-gray-800 lg:order-2">
          <div className="max-w-xl mx-auto lg:mx-0 lg:mr-auto py-16 px-10">
            <h1 className="flex lg:hidden font-medium text-xl text-gray-900 dark:text-white mb-6">
              Order Summary
            </h1>
            <CheckoutTotal carts={carts} />
          </div>
        </div>
      </div>
    </>
  );
}
