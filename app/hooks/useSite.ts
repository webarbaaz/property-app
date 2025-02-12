import { LinkType, SearchTerm } from "@/types";
import { create } from "zustand"; // Use named import instead of default import

type Store = {
  mergedLinks: LinkType[];
  setMergedLinks: (links: LinkType[]) => void;
  searchTerms: SearchTerm;
  setSearchTerms: (searchTerms: SearchTerm) => void;
  searchDialog: boolean;
  closeSearchDialog: () => void;
  setSearchDialog: (value: boolean) => void;
};

export const useSite = create<Store>((set) => ({
  mergedLinks: [],
  setMergedLinks: (links) => set({ mergedLinks: links }),
  searchTerms: {
    propertyStatus: "",
    propertyType: "",
    city: "",
  },
  setSearchTerms: (update) =>
    set((state) => ({
      searchTerms: {
        ...state.searchTerms, // Preserve previous searchTerms
        ...update, // Apply the update to only the relevant field
      },
    })),
  searchDialog: false,
  closeSearchDialog() {
    set({ searchDialog: false });
  },
  setSearchDialog: (value) => set({ searchDialog: value }),
}));
