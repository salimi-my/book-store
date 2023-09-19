import { useState } from "react";
import { Button } from "flowbite-react";
import { router } from "@inertiajs/react";

export default function AddToCart({ id, quantity }) {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    router.post(
      route("cart.store"),
      { bookId: id, bookQuantity: quantity },
      {
        preserveScroll: true,
        onStart: () => {
          setIsDisabled(true);
        },
        onFinish: () => {
          setIsDisabled(false);
        },
      }
    );
  };

  return (
    <Button
      fullSized
      type="button"
      disabled={isDisabled}
      onClick={(e) => handleClick(e)}
      className="rounded-full"
    >
      Add to Cart
    </Button>
  );
}
