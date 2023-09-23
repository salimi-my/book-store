import { Table } from "flowbite-react";

import CartItem from "@/Components/CartItem";
import CartTableRow from "@/Pages/Cart/Partials/CartTableRow";

export default function CartTable({ carts }) {
  return (
    <>
      <Table className="hidden md:table">
        <Table.Head className="border-b dark:border-gray-700">
          <Table.HeadCell>Book</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell className="text-right">Total</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {carts.map((cart) => (
            <CartTableRow key={cart.id} cart={cart} />
          ))}
        </Table.Body>
      </Table>
      <div className="block md:hidden bg-white dark:bg-gray-800 divide-y dark:divide-gray-700 py-4 px-5">
        {carts.map((cart) => (
          <div key={cart.id} className="py-4">
            <CartItem cart={cart} />
          </div>
        ))}
      </div>
    </>
  );
}
