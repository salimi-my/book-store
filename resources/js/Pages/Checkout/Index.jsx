import { ChevronLeft, Landmark, Truck } from "lucide-react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { Button, Label, Radio, Select, TextInput } from "flowbite-react";

import InputError from "@/Components/InputError";
import IndexBreadcrumb from "@/Pages/Checkout/Breadcrumb/IndexBreadcrumb";
import CheckoutTotal from "./Partials/CheckoutTotal";

export default function Index({ addresses, countries }) {
  const { auth, carts } = usePage().props;

  const { data, setData, setDefaults, post, processing, errors, reset } =
    useForm({
      address_id: addresses[0].default === "yes" ? "0" : "New Address",
      name: addresses[0].default === "yes" ? addresses[0].name : "",
      phone: addresses[0].default === "yes" ? addresses[0].phone : "",
      address: addresses[0].default === "yes" ? addresses[0].address : "",
      city: addresses[0].default === "yes" ? addresses[0].city : "",
      postal_code:
        addresses[0].default === "yes" ? addresses[0].postal_code : "",
      state: addresses[0].default === "yes" ? addresses[0].state : "",
      country: addresses[0].default === "yes" ? addresses[0].country : "",
    });

  const handleAddressChange = (e) => {
    if (e.target.value === "New Address") {
      setData((data) => ({ ...data, address_id: e.target.value }));
      setData((data) => ({ ...data, name: "" }));
      setData((data) => ({ ...data, phone: "" }));
      setData((data) => ({ ...data, address: "" }));
      setData((data) => ({ ...data, city: "" }));
      setData((data) => ({ ...data, postal_code: "" }));
      setData((data) => ({ ...data, state: "" }));
      setData((data) => ({ ...data, country: "Select country" }));
    } else {
      setData((data) => ({
        ...data,
        address_id: e.target.value,
      }));
      setData((data) => ({
        ...data,
        name: addresses[e.target.value].name,
      }));
      setData((data) => ({
        ...data,
        phone: addresses[e.target.value].phone,
      }));
      setData((data) => ({
        ...data,
        address: addresses[e.target.value].address,
      }));
      setData((data) => ({
        ...data,
        city: addresses[e.target.value].city,
      }));
      setData((data) => ({
        ...data,
        postal_code: addresses[e.target.value].postal_code,
      }));
      setData((data) => ({
        ...data,
        state: addresses[e.target.value].state,
      }));
      setData((data) => ({
        ...data,
        country: addresses[e.target.value].country,
      }));
    }
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
      <div className="grid grid-cols-2 min-h-screen">
        <div className="bg-white">
          <div className="max-w-xl ml-auto py-16 px-10">
            <div className="flex flex-col">
              <h1 className="font-medium text-xl">Checkout</h1>
              <IndexBreadcrumb />
              <h2 className="font-medium pt-3">Account Information</h2>
              <div className="flex items-center space-x-4 pt-3">
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

              <form onSubmit={() => {}} className="space-y-4">
                <h2 className="font-medium pt-8">Collection Method</h2>
                <div className="flex items-center gap-3 border bg-gray-50 border-gray-300 dark:border-gray-600 dark:bg-gray-700 p-3 rounded-lg">
                  <Radio
                    defaultChecked
                    id="shipping"
                    name="collection_method"
                    value="Shipping"
                  />
                  <Label htmlFor="shipping">
                    <div className="flex items-center gap-2 text-gray-500 font-normal">
                      <Truck />
                      Shipping
                    </div>
                  </Label>
                </div>

                <h2 className="font-medium pt-4">Shipping Address</h2>
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
                    <Label htmlFor="name" value="Full Name" />
                    <TextInput
                      required
                      id="name"
                      className="mt-1 block w-full"
                      value={data.name}
                      onChange={(e) => {
                        if (data.address_id !== "New Address") {
                          setData((data) => ({
                            ...data,
                            address_id: "New Address",
                          }));
                        }
                        setData((data) => ({
                          ...data,
                          name: e.target.value,
                        }));
                      }}
                      placeholder="Enter your name..."
                    />
                    <InputError message={errors.name} className="-mb-4" />
                  </div>
                  <div>
                    <Label htmlFor="phone" value="Phone Number" />
                    <TextInput
                      required
                      id="phone"
                      name="phone"
                      value={data.phone}
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
                          phone: e.target.value,
                        }));
                      }}
                    />
                    <InputError message={errors.phone} className="-mb-4" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="address" value="Address" />
                  <TextInput
                    required
                    id="address"
                    name="address"
                    value={data.address}
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
                        address: e.target.value,
                      }));
                    }}
                  />
                  <InputError message={errors.address} className="-mb-4" />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city" value="City" />
                    <TextInput
                      required
                      id="city"
                      className="mt-1 block w-full"
                      value={data.city}
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
                          city: e.target.value,
                        }));
                      }}
                    />
                    <InputError message={errors.city} className="-mb-4" />
                  </div>
                  <div>
                    <Label htmlFor="postal_code" value="Postal Code" />
                    <TextInput
                      required
                      id="postal_code"
                      name="postal_code"
                      value={data.postal_code}
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
                          postal_code: e.target.value,
                        }));
                      }}
                    />
                    <InputError
                      message={errors.postal_code}
                      className="-mb-4"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="state" value="State" />
                    <TextInput
                      required
                      id="state"
                      className="mt-1 block w-full"
                      value={data.state}
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
                          state: e.target.value,
                        }));
                      }}
                    />
                    <InputError message={errors.state} className="-mb-4" />
                  </div>
                  <div>
                    <Label htmlFor="country" value="Country" />
                    <Select
                      required
                      id="country"
                      name="country"
                      className="mt-1 block w-full"
                      value={data.country ? data.country : "Select country"}
                      onChange={(e) => {
                        if (data.address_id !== "New Address") {
                          setData((data) => ({
                            ...data,
                            address_id: "New Address",
                          }));
                        }
                        setData((data) => ({
                          ...data,
                          country: e.target.value,
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
                    <InputError message={errors.country} className="-mb-4" />
                  </div>
                </div>

                <h2 className="font-medium pt-4">Payment Method</h2>
                <div className="flex items-center gap-3 border bg-gray-50 border-gray-300 dark:border-gray-600 dark:bg-gray-700 p-3 rounded-lg">
                  <Radio
                    defaultChecked
                    id="fpx"
                    name="payment_method"
                    value="Online Banking (FPX)"
                  />
                  <Label htmlFor="fpx">
                    <div className="flex items-center gap-2 text-gray-500 font-normal">
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
        <div className="bg-slate-50">
          <div className="max-w-xl mr-auto py-16 px-10">
            <CheckoutTotal carts={carts} />
          </div>
        </div>
      </div>
    </>
  );
}
