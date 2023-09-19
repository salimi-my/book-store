import { Minus, Plus } from "lucide-react";

export default function QuantityInput({
  quantity,
  handleAdd,
  handleMinus,
  handleQuantityChange,
}) {
  return (
    <div className="my-4 flex items-center space-x-4">
      <label htmlFor="quantity" className="font-medium">
        Quantity:
      </label>
      <div className="flex items-center">
        <button
          onClick={handleMinus}
          className="flex justify-center w-8 h-8 items-center focus:outline-none text-white bg-cyan-700 border border-transparent enabled:hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 focus:ring-2 rounded-l-md"
        >
          <Minus />
        </button>
        <input
          id="quantity"
          type="number"
          min={1}
          max={30}
          value={quantity}
          onChange={(e) => handleQuantityChange(e)}
          className="quantity-input block w-12 h-8 border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 text-sm font-medium text-center"
        />
        <button
          onClick={handleAdd}
          className="flex justify-center w-8 h-8 items-center focus:outline-none text-white bg-cyan-700 border border-transparent enabled:hover:bg-cyan-800 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800 focus:ring-2 rounded-r-md"
        >
          <Plus />
        </button>
      </div>
    </div>
  );
}
