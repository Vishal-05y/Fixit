// lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * A utility function that combines clsx and tailwind-merge
 * 
 * This function takes multiple class values and merges them together,
 * then processes them with tailwind-merge to properly handle Tailwind CSS classes
 * and avoid class conflicts.
 * 
 * @param inputs - Class values to be merged (strings, objects, arrays, etc.)
 * @returns A string of merged and processed class names
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}