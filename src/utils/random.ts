export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function first(arr: [], length: number) {
  return arr.slice(0, length);
}

export function randoms(arr: [], length: number) {
  return first(shuffle(arr), length);
}

export function shuffle(arr: []) {
  let result: [] = [];

  while (arr.length > 0) {
    let random = getRandomInt(0, arr.length - 1);
    let elem = arr.splice(random, 1)[0];
    result.push(elem);
  }
  return result;
}
