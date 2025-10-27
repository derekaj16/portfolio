import { clsx, type ClassValue } from 'clsx'
import { differenceInMonths, differenceInYears } from 'date-fns'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function diffInYearsAndMonths(from: Date, to: Date = new Date()) {
  const years = differenceInYears(to, from)
  const totalMonths = differenceInMonths(to, from)
  const months = totalMonths - years * 12

  return { years, months }
}
