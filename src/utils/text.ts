export const lowerCase = (word: string) => word.toLowerCase()

export const upperCase = (word: string) => word.toUpperCase()

export const capitalCase = (word:string) => `${upperCase(word[0])}${word.slice(1)}`
