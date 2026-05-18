import { create } from "zustand";
import type { SectionId } from "../data/navigation";

interface NavigationStore {
  activeSection: SectionId;
  isMenuOpen: boolean;
  setActiveSection: (section: SectionId) => void;
  toggleMenu: () => void;
  closeMenu: () => void;
}

export const useNavigationStore = create<NavigationStore>((set) => ({
  activeSection: "about",
  isMenuOpen: false,
  setActiveSection: (section) => set({ activeSection: section }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
}));
