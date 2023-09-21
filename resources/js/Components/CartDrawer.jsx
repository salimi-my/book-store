import { ShoppingCart, X } from "lucide-react";

import { useCartDrawer } from "@/Hooks/useCartDrawer";

export default function CartDrawer() {
  const drawer = useCartDrawer();

  return (
    <>
      <div
        className={`fixed top-0 right-0 z-40 h-screen p-4 md:p-8 overflow-y-auto transition-transform bg-white w-80 md:w-[420px] dark:bg-gray-800 ${
          drawer.isOpen ? "transform-none" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <h5 className="inline-flex items-center text-lg font-semibold text-gray-600 dark:text-gray-400">
            <ShoppingCart className="w-6 h-6 mr-2.5" />
            Carts
          </h5>
          <button
            onClick={drawer.onClose}
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white -mr-2"
          >
            <X />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <div className="flex flex-col space-y-4 pt-5">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            tempore inventore alias tenetur id, ducimus unde, aliquid eveniet
            numquam fuga dolores necessitatibus error mollitia illum praesentium
            expedita neque. Laborum, illum?
          </p>
        </div>
      </div>

      <div
        onClick={drawer.onClose}
        className={`${
          drawer.isOpen ? "" : "hidden "
        }bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30`}
      ></div>
    </>
  );
}
