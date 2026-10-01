import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number, currency: string = 'TMN', isPersian: boolean = false): string {
  const formattedNumber = new Intl.NumberFormat('fa-IR', {
    maximumFractionDigits: 0,
  }).format(amount);

  const formattedEnNumber = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  }).format(amount);

  if (isPersian) {
    return `${formattedNumber} تومان`;
  }

  return `${formattedEnNumber} Toman`;
}
