import useGenerateLevelMemo, {
  generateNext,
  isEndOfTheRow,
  isStartOfTheRow,
} from '@/components/useGenerateLevelMemo'

// describe("Test level generator", () => {

// });

// describe("Test next tile", () => {

// });

describe('Test tile position', () => {
  it('Start', () => {
    expect(isStartOfTheRow(5)).toBeFalsy()
    expect(isStartOfTheRow(1)).toBeTruthy()
    expect(isStartOfTheRow(3)).toBeFalsy()
  })

  it('End', () => {
    expect(isEndOfTheRow(1)).toBeFalsy()
    expect(isEndOfTheRow(3)).toBeFalsy()
    expect(isEndOfTheRow(5)).toBeTruthy()
  })
})
