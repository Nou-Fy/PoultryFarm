import { create } from "zustand";

export const useCardStore = create((set) => ({
  cards: null,
  loading: false,
  error: null,

  fetchCards: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/src/data/initial-users.json");
      if (!res.ok) throw new Error("Erreur de chargement");
      const data = await res.json();
      set({ cards: data, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  },

  addPoule: (poule) =>
    set((state) => ({
      cards: {
        ...state.cards,
        poules: [...(state.cards?.poules || []), { ...poule, id: Date.now() }],
      },
    })),

  updatePoule: (poule) =>
    set((state) => ({
      cards: {
        ...state.cards,
        poules: state.cards?.poules.map((p) => (p.id === poule.id ? poule : p)),
      },
    })),

  removePoule: (id) =>
    set((state) => ({
      cards: {
        ...state.cards,
        poules: state.cards?.poules.filter((p) => p.id !== id),
      },
    })),
    
  resetCards: () => set({ cards: null, loading: false, error: null }),
}));