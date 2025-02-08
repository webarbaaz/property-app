import { Link } from "@/types";
import { create } from "zustand"; // Use named import instead of default import

type Store = {
  mergedLinks: Link[];
  setMergedLinks: (links: Link[]) => void;
};

export const useSite = create<Store>((set) => ({
  mergedLinks: [],
  setMergedLinks: (links) => set({ mergedLinks: links }),
}));
