import { create } from "zustand";

export const useSelectionStore = create((set) => ({
  selectedPoule: null,

  selectPoule: (poule) => set({ selectedPoule: poule }),

  clearSelection: () => set({ selectedPoule: null }),

  updateDraftField: (name, value) =>
    set((state) => ({
      selectedPoule: state.selectedPoule 
        ? { ...state.selectedPoule, [name]: value } 
        : null,
    })),
}));