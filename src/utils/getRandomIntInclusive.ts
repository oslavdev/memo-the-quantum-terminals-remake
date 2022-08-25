/**
 * Generates a random number
 * @param {number} start
 * @param {number} size
 * @returns {number}
 */
export function getRandomIntInclusive(start: number, size: number): number {
  const min = Math.ceil(start)
  const max = Math.floor(size)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
