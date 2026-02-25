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
        selectedPoule: null,
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

  selectPoule: (poule) =>
    set({
      selectedPoule: poule,
    }),

  clearSelection: () =>
    set({
      selectedPoule: null,
    }),

  addPoule: (poule) =>
    set((state) => ({
      cards: {
        ...state.cards,
        poules: [...state.cards.poules, poule],
      },
    })),

  removePoule: (id) =>
    set((state) => ({
      cards: {
        ...state.cards,
        poules: state.cards.poules.filter((p) => p.id !== id),
      },
    })),

  persistCards: () =>
    set((state) => {
      if (state.cards?.poules) {
        localStorage.setItem("poules", JSON.stringify(state.cards.poules));
      }
    }),

  openModal: () => set({ isModalOpen: true }),

  closeModal: () => set({ isModalOpen: false }),

  reset: () =>
    set({
      cards: null,
      loading: false,
      error: null,
      isModalOpen: false,
    }),

  valeuInput: (name, value) => {
    set((state) => ({
      selectedPoule: { ...state.selectedPoule, [name]: value },
    }));
  },
}));
