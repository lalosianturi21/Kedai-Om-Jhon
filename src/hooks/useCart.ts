import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";

import { Product } from "@prisma/client";

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (data: Product) => void;
  decreaseQuantity: (id: string) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],

      addItem: (data: Product) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === data.id);

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === data.id ? { ...item, quantity: item.quantity + 1 } : item
              ),
            };
          }

          toast.success("Item added to cart");
          return { items: [...state.items, { ...data, quantity: 1 }] };
        });
      },

      decreaseQuantity: (id: string) => {
        set((state) => {
          const updatedItems = state.items
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0);

          toast.success("Item quantity updated");
          return { items: updatedItems };
        });
      },

      removeItem: (id: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
        toast.success("Item removed from cart");
      },

      removeAll: () => {
        set({ items: [] });
        toast.success("All items removed from cart");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
