import { create } from "zustand";

export const useCartDrawer = create((set) => ({
  isOpen: false,
  onOpen: () => {
    document.body.classList.add("overflow-hidden");
    set({ isOpen: true });
  },
  onClose: () => {
    document.body.classList.remove("overflow-hidden");
    set({ isOpen: false });
  },
}));
