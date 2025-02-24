import { LinkType, Property, SearchTerm } from "@/types";
import { create } from "zustand"; // Use named import instead of default import

type Store = {
  mergedLinks: LinkType[];
  setMergedLinks: (links: LinkType[]) => void;
  searchTerms: SearchTerm;
  setSearchTerms: (searchTerms: SearchTerm) => void;
  leadDialog: boolean;
  closeLeadDialog: () => void;
  setLeadDialog: (value: boolean) => void;
  property: Property | null;
  setProperty: (property: Property) => void;
  activeSlug: string | null;
  setActiveSlug: (slug: string) => void;
};

export const useSite = create<Store>((set) => ({
  mergedLinks: [],
  setMergedLinks: (links) => set({ mergedLinks: links }),
  searchTerms: {
    propertyStatus: "",
    propertyType: "",
    locality: "",
    configuration: "",
  },
  activeSlug: null,
  setActiveSlug(slug) {
    set({ activeSlug: slug });
  },
  setSearchTerms: (update) =>
    set((state) => ({
      searchTerms: {
        ...state.searchTerms, // Preserve previous searchTerms
        ...update, // Apply the update to only the relevant field
      },
    })),
  leadDialog: false,
  closeLeadDialog() {
    set({ leadDialog: false });
  },
  setLeadDialog: (value) => set({ leadDialog: value }),
  property: null,
  setProperty: (property) => set({ property: property }),
}));
