import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetUrl(path: string) {
  // Ensure we handle the base URL correctly
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");
  // If path already starts with the baseUrl or is an absolute HTTP url, return as is
  if (path.startsWith('http') || path.startsWith(baseUrl + '/')) {
    return path;
  }
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return `${baseUrl}/${cleanPath}`;
}
