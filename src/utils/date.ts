export const parseDate = (date: string): string => {
  return String(new Date(date)).split(' ').slice(1, 3).reverse().join(' ')
}