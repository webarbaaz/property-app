import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Function to merge Tailwind and conditional classes
export function cn(...inputs: (string | undefined)[]) {
  return twMerge(clsx(inputs));
}
