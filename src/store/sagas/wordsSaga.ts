import axios from "axios";
import { getRandomInt, randoms } from "../../utils/random";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  wordsActionG1,
  wordsActionG2,
  wordsActionG3,
  wordsActionG4,
  wordsActionG5,
  wordsActionG6,
} from "../action-creators/wordsActions";
import { WordsActionsType } from "../../types/words";

export const getData = async (page: number, group: number) => {
  const req = await axios.get(
    `https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`
  );
  return req.data;
};

export function* wordsSagaWorkerGroup1(): any {
  const page = getRandomInt(0, 29);
  const words = yield call(getData, page, 0);
  const randomWords = randoms(words, 10);
  yield put(wordsActionG1(randomWords));
}

export function* wordsSagaWorkerGroup2(): any {
  const page = getRandomInt(0, 29);
  const words = yield call(getData, page, 1);
  const randomWords = randoms(words, 10);
  yield put(wordsActionG2(randomWords));
}

export function* wordsSagaWorkerGroup3(): any {
  const page = getRandomInt(0, 29);
  const words = yield call(getData, page, 2);
  const randomWords = randoms(words, 10);
  yield put(wordsActionG3(randomWords));
}

export function* wordsSagaWorkerGroup4(): any {
  const page = getRandomInt(0, 29);
  const words = yield call(getData, page, 3);
  const randomWords = randoms(words, 10);
  yield put(wordsActionG4(randomWords));
}

export function* wordsSagaWorkerGroup5(): any {
  const page = getRandomInt(0, 29);
  const words = yield call(getData, page, 4);
  const randomWords = randoms(words, 10);
  yield put(wordsActionG5(randomWords));
}

export function* wordsSagaWorkerGroup6(): any {
  const page = getRandomInt(0, 29);
  const words = yield call(getData, page, 5);
  const randomWords = randoms(words, 10);
  yield put(wordsActionG6(randomWords));
}

export function* wordsWatcherGroup1Saga() {
  yield takeEvery(WordsActionsType.LOAD_WORDS_1, wordsSagaWorkerGroup1);
}

export function* wordsWatcherGroup2Saga() {
  yield takeEvery(WordsActionsType.LOAD_WORDS_2, wordsSagaWorkerGroup2);
}

export function* wordsWatcherGroup3Saga() {
  yield takeEvery(WordsActionsType.LOAD_WORDS_3, wordsSagaWorkerGroup3);
}

export function* wordsWatcherGroup4Saga() {
  yield takeEvery(WordsActionsType.LOAD_WORDS_4, wordsSagaWorkerGroup4);
}

export function* wordsWatcherGroup5Saga() {
  yield takeEvery(WordsActionsType.LOAD_WORDS_5, wordsSagaWorkerGroup5);
}

export function* wordsWatcherGroup6Saga() {
  yield takeEvery(WordsActionsType.LOAD_WORDS_6, wordsSagaWorkerGroup6);
}
