export const sortArray = (array: any[], key: string, asc = true) => {
  const getValue = (value: number) => (asc ? value : value * -1)
  return array.sort(function (a, b) {
    return a[key] > b[key] ? getValue(1) : a[key] < b[key] ? getValue(-1) : 0
  })
}

// export const sortArray = (
//   array: any[],
//   key: string,
//   date = false,
//   asc = true
// ) => {
//   const newArray = date ? propertyToDate(array, key) : array
//   return newArray.sort((a, b) => (asc ? a[key] - b[key] : b[key] - a[key]))
// }

export const propertyToDate = (array: any[], key: string) => {
  return array.map((item) => ({
    ...item,
    [key]: new Date(item[key])
  }))
}

export const filterArray = (array: any[], key: string) => {
  return array.filter((item) => item[key])
}
