import { Button } from "flowbite-react";

export default function AddToCart({ bookId, quantity }) {
  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <Button
      fullSized
      type="button"
      onClick={(e) => handleClick(e)}
      className="rounded-full"
    >
      Add to Cart
    </Button>
  );
}
