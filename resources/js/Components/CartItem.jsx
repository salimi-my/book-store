import { Link } from "@inertiajs/react";
import CartQuantity from "./CartQuantity";

export default function CartItem({ cart }) {
  const price = (cart.book_owner.price * cart.quantity).toLocaleString(
    "en-MY",
    {
      style: "currency",
      currency: "MYR",
      maximumFractionDigits: 2,
    }
  );

  return (
    <div className="flex items-center space-x-4 md:space-x-6">
      <Link
        href={route("book.show", cart.book_owner.slug)}
        className="border p-1 rounded-md shrink-0 transition-transform ease-in-out hover:scale-105"
      >
        <img
          src={`/book-images/${cart.book_owner.image}`}
          className="w-28 h-40 object-cover rounded-md"
        />
      </Link>
      <div className="flex flex-col">
        <p className="font-medium">{price}</p>
        <Link
          href={route("book.show", cart.book_owner.slug)}
          className="hover:underline"
        >
          <p className="font-medium">{cart.book_owner.title}</p>
        </Link>
        <CartQuantity cart={cart} />
      </div>
    </div>
  );
}
