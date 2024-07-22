import { findNumberIndex, generateNumbers, readCommandLineArguments, shuffleArray } from '../src/utils';

describe('run all test for utils.ts', () => {
  it('should shuffle the array', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray = [...array];
    shuffleArray(shuffledArray);

    expect(shuffledArray).not.toEqual(array);
    expect(shuffledArray).toHaveLength(array.length);
  });

  it('should produce different shuffles on multiple calls', () => {
    const array = [1, 2, 3, 4, 5];
    const shuffledArray1 = [...array];
    const shuffledArray2 = [...array];
    shuffleArray(shuffledArray1);
    shuffleArray(shuffledArray2);

    expect(shuffledArray1).not.toEqual(shuffledArray2);
  });

  it('should generate an array of numbers from 0 to 1000', () => {
    const result = generateNumbers(1000);
    expect(result).toHaveLength(1000);
    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toBe(i);
    }
  });

  it('should return 0 if no argument is provided', () => {
    const originalArgv = process.argv;
    process.argv = ['node', 'index.js'];
    const result = readCommandLineArguments();
    process.argv = originalArgv;

    expect(result).toBe(0);
  });

  it('should parse the argument as an integer', () => {
    const originalArgv = process.argv;
    process.argv = ['node', 'index.js', '123'];
    const result = readCommandLineArguments();
    process.argv = originalArgv;

    expect(result).toBe(123);
  });

  it('should return NaN if the argument is not a valid integer', () => {
    const originalArgv = process.argv;
    process.argv = ['node', 'index.js', 'abc'];
    const result = readCommandLineArguments();
    process.argv = originalArgv;

    expect(result).toBeNaN();
  });

  it('should return the index of the target number if it exists in the array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const target = 3;
    const result = findNumberIndex(numbers, target);
    expect(result).toBe(2);
  });

  it('should return -1 if the target number does not exist in the array', () => {
    const numbers = [1, 2, 3, 4, 5];
    const target = 6;
    const result = findNumberIndex(numbers, target);
    expect(result).toBe(-1);
  });

  it('should handle an empty array', () => {
    const numbers: number[] = [];
    const target = 1;
    const result = findNumberIndex(numbers, target);
    expect(result).toBe(-1);
  });
});
