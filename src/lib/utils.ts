import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toPersianDigits(n: number | string): string {
  const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return n.toString().replace(/\d/g, (x) => persianDigits[parseInt(x, 10)]);
}

export function formatPersianPrice(amount: number): string {
  const formattedNumber = new Intl.NumberFormat('fa-IR', {
    maximumFractionDigits: 0,
  }).format(amount);
  return `${formattedNumber} تومان`;
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
