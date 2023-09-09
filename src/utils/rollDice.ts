// ダイスの目を生成する関数
export const rollDice = (numberOfDice: number): number[] => {
  let result: number[] = [];

  for (let i = 0; i < numberOfDice; i++) {
    const tmp = Math.floor(Math.random() * 6) + 1;
    result.push(tmp);
  }

  return result;
};
