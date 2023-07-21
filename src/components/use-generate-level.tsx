import { boardRules } from '@/utils/board-rules'
import { getRandomIntInclusive } from '@/utils/get-random'

const size = 30

/**
 * Check if a number is the start of the row.
 *
 * @param {number} number - The number to check.
 * @returns {boolean} True if the number is the start of the row; otherwise, false.
 */
export function isStartOfTheRow (number: number): boolean {
  return (number - 1) % 5 === 0
}

/**
 * Check if a number is the end of the row.
 *
 * @param {number} number - The number to check.
 * @returns {boolean} True if the number is the end of the row; otherwise, false.
 */
export function isEndOfTheRow (number: number): boolean {
  return number % 5 === 0
}


/**
 * Get possible adjacent numbers for a given number on the board.
 *
 * @param {number} number - The number on the board.
 * @returns {number[]} An array of possible adjacent numbers.
 */
export const getPossibilities = (number: number): number[] => {
  const possibilities = []
  if (isStartOfTheRow(number)) {
    possibilities.push(
      number + 1,
      number + 5,
      number - 5,
      number - 4,
      number + 6,
    )
  } else if (isEndOfTheRow(number)) {
    possibilities.push(
      number - 1,
      number + 5,
      number - 5,
      number - 6,
      number + 4,
    )
  } else {
    possibilities.push(
      number + 1,
      number - 1,
      number - 5,
      number + 5,
      number - 5,
      number + 6,
      number - 6,
      number + 4,
      number - 4,
    )
  }
  return possibilities
}


/**
 * Filter out numbers from the possibilities list that are out of range or in the avoid list.
 *
 * @param {number[]} possibilities - The list of possible adjacent numbers.
 * @param {number[]} avoid - The list of numbers to avoid.
 * @returns {number[]} The filtered array of possible adjacent numbers.
 */
export const filterPossibilities = (
  possibilities: number[],
  avoid: number[],
): number[] => {
  const filter_range = possibilities.filter((el) => el > 0 && el < size) // our of range
  const filter_avoid = filter_range.filter((val) => !avoid.includes(val)) // not in avoid list

  return filter_avoid
}


/**
 * Generate the next number in the sequence based on the current number and avoid list.
 *
 * @param {number} number - The current number.
 * @param {number[]} avoid - The list of numbers to avoid.
 * @returns {number} The next number in the sequence.
 */
export const generateNext = (number: number, avoid: number[]): number => {
  const possibilities: number[] = getPossibilities(number)
  const filtered: number[] = filterPossibilities(possibilities, avoid) // filter possibilities

  if (filtered.length === 0) {
    throw new Error('No valid next numbers found. Game over.');
  }
 
  const random: number = getRandomIntInclusive(0, filtered.length - 1)
  const selected_possibility: number = filtered[random]

  return selected_possibility
}


/**
 * Generate the level sequence based on the player's level.
 *
 * @param {number|string} player_level - The player's level (can be a number or string).
 * @returns {number[]} The generated level sequence as an array of numbers.
 * @throws {Error} If player_level is not defined or invalid.
 *
 * @example
 * const playerLevel = 3;
 * const levelSequence = generateLevelMemo(playerLevel);
 * // levelSequence is an array of numbers representing the memoized level.
 */
const generateLevelMemo = (playerLevel: number | string) => {

  if(!playerLevel){
    throw new Error("Player level is not defined!")
  }

  const levelConfig = boardRules.find((rule) => rule.level === Number(playerLevel));
  if (!levelConfig) {
    throw new Error(`Invalid player level: ${playerLevel}`);
  }
  const levelArr = [];
  const avoid = [];

  let previousStep = null;

  const firstTile = Math.floor(Math.random() * size) + 1;
  levelArr.push(firstTile);
  avoid.push(firstTile);
  previousStep = firstTile;

  const numberOfTiles = levelConfig.level;
  for (let i = 0; i < numberOfTiles; i++) {
    const next = generateNext(previousStep, avoid);

    levelArr.push(next);
    avoid.push(next);
    previousStep = next;
  }

  return levelArr;
}

export default generateLevelMemo
