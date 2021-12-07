export const sortArray = (
  array: any[],
  key: string,
  date = false,
  asc = true
) => {
  const newArray = date ? propertyToDate(array, key) : array
//   return newArray.sort((a, b) => (asc ? a[key] - b[key] : b[key] - a[key]))
  return newArray.sort((a, b) => ( a[key] - b[key]))

}

export const propertyToDate = (array: any[], key: string) => {
  return array.map((item) => ({
    ...item,
    [key]: new Date(item[key])
  }))
}

export const filterArray = (array: any[], key: string) => {
  return array.filter((item) => item[key])
}
