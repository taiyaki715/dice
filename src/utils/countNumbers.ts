export const countNumbers = (numbers: number[][]): Record<number, number> => {
  const result: Record<number, number> = {};

  for (const array of numbers) {
    for (const number of array) {
      if (result[number]) {
        result[number] += 1;
      } else {
        result[number] = 1;
      }
    }
  }

  return result;
}
