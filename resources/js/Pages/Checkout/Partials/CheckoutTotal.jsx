import CheckoutItem from "@/Pages/Checkout/Partials/CheckoutItem";

export default function CheckoutTotal({ carts }) {
  const subTotal = carts
    .map((cart) => cart.book_owner.price * cart.quantity)
    .reduce((totalPrice, currentPrice) => totalPrice + currentPrice, 0)
    .toLocaleString("en-MY", {
      style: "currency",
      currency: "MYR",
      maximumFractionDigits: 2,
    });

  const shipping = (10).toLocaleString("en-MY", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 2,
  });

  const totalAll = (
    carts
      .map((cart) => cart.book_owner.price * cart.quantity)
      .reduce((totalPrice, currentPrice) => totalPrice + currentPrice, 0) + 10
  ).toLocaleString("en-MY", {
    style: "currency",
    currency: "MYR",
    maximumFractionDigits: 2,
  });

  return (
    <div className="flex flex-col space-y-4">
      {carts.map((cart) => (
        <CheckoutItem key={cart.id} cart={cart} />
      ))}

      <div className="flex flex-col space-y-2 border-y border-gray-200 dark:border-gray-600 py-4 text-sm">
        <div className="flex justify-between items-center">
          <p>Subtotal</p>
          <p className="font-medium">{subTotal}</p>
        </div>
        <div className="flex justify-between items-center">
          <p>Shipping</p>
          <p className="font-medium">{shipping}</p>
        </div>
      </div>

      <div className="flex justify-between items-center text-sm">
        <p>Total</p>
        <p className="font-medium text-lg">{totalAll}</p>
      </div>
    </div>
  );
}
