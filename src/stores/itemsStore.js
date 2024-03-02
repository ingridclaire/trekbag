import { create } from "zustand";
import { initialItems } from "../lib/constants";
import { persist } from "zustand/middleware";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      deleteItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },
      deleteAll: () => {
        set(() => ({ items: [] }));
      },
      resetList: () => {
        set(() => ({ items: initialItems }));
      },
      toggleCheck: (id) => {
        set((state) => ({
          items: state.items.map((item) => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }
            return item;
          }),
        }));
      },
      markAllAsUnpacked: () => {
        set((state) => ({
          items: state.items.map((item) => ({ ...item, packed: false })),
        }));
      },
      markAllAsPacked: () => {
        set((state) => ({
          items: state.items.map((item) => ({ ...item, packed: true })),
        }));
      },
      addItem: (newItem) => {
        set((state) => ({
          items: [
            ...state.items,
            {
              id: new Date().getTime(),
              name: newItem,
              packed: false,
            },
          ],
        }));
      },
    }),
    {
      name: "items",
    }
  )
);
