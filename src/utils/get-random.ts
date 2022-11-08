export const getRandomIntInclusive = (start: number, size: number): number => {
  const min = Math.ceil(start)
  const max = Math.floor(size)
  return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive
}
