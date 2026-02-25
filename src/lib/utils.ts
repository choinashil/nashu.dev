import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return date
    .toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\. /g, ".")
    .replace(/\.$/, "");
}

export const readingTime = (html: string) => {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const charCount = textOnly.replace(/\s/g, "").length;
  const readingTimeMinutes = Math.ceil(charCount / 600);
  return `${readingTimeMinutes} min read`;
};
