import { boardRules } from '@/utils/board-rules'
import { getRandomIntInclusive } from '@/utils/get-random'

const BOARD_SIZE = 30

export const isStartOfTheRow = (number: number): boolean => {
  return (number - 1) % 5 === 0
}

export const isEndOfTheRow = (number: number): boolean => {
  return number % 5 === 0
}

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

export const filterPossibilities = (
  possibilities: number[],
  avoid: number[],
): number[] => {
  const filter_range = possibilities.filter((el) => el > 0 && el < BOARD_SIZE) // our of range
  const filter_avoid = filter_range.filter((val) => !avoid.includes(val)) // not in avoid list

  return filter_avoid
}

export const generateNext = (number: number, avoid: number[]): number => {
  const possibilities: number[] = getPossibilities(number)
  const filtered: number[] = filterPossibilities(possibilities, avoid) // filter possibilities
  const random: number = getRandomIntInclusive(0, filtered.length - 1)
  const selected_possibility: number = filtered[random]

  return selected_possibility
}

/**
 * @name generateLevelMemo
 * 
 * This functions generates array of numbers
 * representing the sequence of the path on the game 
 * board.
 *  
 * (!) There is a minor chance of a combination
 * that will not allow to construct the full path
 * of required number of tiles. In this case it is 
 * recommended to re-run function.
 * 
 * @param player_level {number|string}
 * @returns {number[]}
 */

function generateLevelMemo (player_level: number | string):number[]  {

  const current_rule = boardRules.find((el) => el.level === player_level)
  const level_arr: number[] = []
  const avoid: number[] = []
  const number_of_tiles: number = current_rule.level

  let previous_step: number | null = null

  // get first tile
  const first_tile = getRandomIntInclusive(1, BOARD_SIZE)
  level_arr.push(first_tile)
  avoid.push(first_tile)
  previous_step = first_tile

  // get the next step
  for (let i = 0; i <= number_of_tiles; i++) {
    const next = generateNext(previous_step, avoid)

    level_arr.push(next)
    avoid.push(next)

    previous_step = next
  }

  return level_arr
}

export default generateLevelMemo
