// Utility helpers shared across the UI.
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  // Combine conditional classnames and resolve Tailwind conflicts.
  return twMerge(clsx(inputs));
}
