import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// The standard "cn" wrapper seen in modern React apps
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
