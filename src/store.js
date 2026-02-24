// stores/useDashboardStore.js
import { create } from "zustand";

export const useStore = create((set) => ({
  cards: null,
  loading: false,
  error: null,
  isModalOpen: false,

  fetchCards: async () => {
    set({ loading: true, error: null });

    try {
      const res = await fetch("/src/data/initial-users.json"); 

      if (!res.ok) {
        throw new Error("Erreur de chargement");
      }

      const data = await res.json();

      set({
        cards: data,
        loading: false,
      });
    } catch (err) {
      console.error(err);
      set({
        error: err.message,
        loading: false,
      });
    }
  },

  openModal: () => set({ isModalOpen: true }),

  closeModal: () => set({ isModalOpen: false }),

  reset: () =>
    set({
      cards: null,
      loading: false,
      error: null,
      isModalOpen: false,
    }),
}));