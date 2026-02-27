// stores/useDashboardStore.js
import { create } from "zustand";

export const useStore = create((set) => ({
  cards: null,
  loading: false,
  error: null,
  isModalOpen: false,
  selectedPoule: null,

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

  selectPoule: (poule) => {
    console.log("Type de la poule :", poule?.type);
    console.log("Poule cliquée :", poule);
    console.log("Clés disponibles :", Object.keys(poule || {}));
    console.log("Valeur de .type :", poule?.type);
    set({
      selectedPoule: poule,
    });
  },

  clearSelection: () =>
    set({
      selectedPoule: null,
    }),

  valeuInput: (name, value) =>
    set((state) => ({
      selectedPoule: {
        ...state.selectedPoule,
        [name]: value,
      },
    })),

  addPoule: (poule) =>
    set((state) => ({
      cards: {
        ...state.cards,
        poules: [...state.cards.poules, { ...poule, id: Date.now() }],
      },
    })),

  updatePoule: (poule) =>
    set((state) => {
      if (!state.cards?.poules && !Array.isArray(state.cards)) return state;

      const poulesActuelles = state.cards.poules || state.cards;

      return {
        cards: {
          ...state.cards,
          poules: poulesActuelles.map((p) => (p.id === poule.id ? poule : p)),
        },
      };
    }),

  // updatePoule: (poule) =>
  //   set((state) => {
  //     if (!state.cards) return state;

  //     return {
  //       cards: {
  //         ...state.cards,
  //         poules: state.cards.poules.map((p) =>
  //           p.id === poule.id ? poule : p,
  //         ),
  //       },
  //     };
  //   }),

  removePoule: (id) =>
    set((state) => ({
      cards: {
        ...state.cards,
        poules: state.cards.poules.filter((p) => p.id !== id),
      },
    })),

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
