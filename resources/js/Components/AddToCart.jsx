import { useState } from "react";
import { Button } from "flowbite-react";
import { router } from "@inertiajs/react";

import { useCartDrawer } from "@/Hooks/useCartDrawer";

export default function AddToCart({ id, quantity }) {
  const drawer = useCartDrawer();
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();

    router.post(
      route("cart.store"),
      { bookId: id, bookQuantity: quantity },
      {
        preserveScroll: true,
        preserveState: false,
        onStart: () => {
          setIsDisabled(true);
        },
        onFinish: () => {
          setIsDisabled(false);
          drawer.onOpen();
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
