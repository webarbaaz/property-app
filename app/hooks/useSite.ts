import { LinkType } from "@/types";
import { create } from "zustand"; // Use named import instead of default import

type Store = {
  mergedLinks: LinkType[];
  setMergedLinks: (links: LinkType[]) => void;
};

export const useSite = create<Store>((set) => ({
  mergedLinks: [],
  setMergedLinks: (links) => set({ mergedLinks: links }),
}));
