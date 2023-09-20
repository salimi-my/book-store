import { ShoppingCart } from "lucide-react";

export default function CartToggle({ carts }) {
  return (
    <>
      <button
        type="button"
        className="relative text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-1.5 w-9 h-9 mr-2"
      >
        <ShoppingCart />
        <div className="absolute flex justify-center items-center -top-1 -right-1 w-[1.3rem] h-[1.3rem] rounded-full bg-cyan-700 text-white text-xs">
          <p className="leading-none">{carts.length}</p>
        </div>
      </button>
    </>
  );
}
