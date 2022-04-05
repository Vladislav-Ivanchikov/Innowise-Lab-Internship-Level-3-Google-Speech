export const findRecordWord = (
  recordWord: string,
  wordsArr: any[],
  result: any[],
  addResultString: (rightWord: object) => object
) => {
  const rightWord = wordsArr.find(
    (item: any) => item.word.toLowerCase() === recordWord.toLowerCase()
  );
  const repeat = result.includes(recordWord);
  if (rightWord && !repeat) addResultString(rightWord);
};
