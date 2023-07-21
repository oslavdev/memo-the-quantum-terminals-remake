/**
 * Generates a random integer between a specified range (inclusive).
 *
 * @param {number} start - The minimum value of the range (inclusive).
 * @param {number} size - The maximum value of the range (inclusive).
 * @returns {number} A random integer between the specified range (inclusive).
 * @throws {Error} If either `start` or `size` is falsy (e.g., 0, NaN, null, undefined).
 * @throws {Error} If `start` is greater than `size`.
 *
 * @example
 * const randomValue = getRandomIntInclusive(1, 10);
 * // randomValue could be any integer from 1 to 10, including both 1 and 10.
 */

export function getRandomIntInclusive(start: number, size: number): number {
  if (typeof start !== 'number' && typeof size !== 'number') {
    throw new Error('Start and size should be numbers!')
  }

  if (
    typeof start === null ||
    typeof start === undefined ||
    typeof size === null ||
    typeof size === undefined
  ) {
    throw new Error('Minimum and maximum numbers are required!')
  }

  const min = Math.ceil(start)
  const max = Math.floor(size)

  if (min > max) {
    throw new Error(
      'Minimum value must be less than or equal to the maximum value!'
    )
  }

  return Math.floor(Math.random() * (max - min + 1)) + min
}
