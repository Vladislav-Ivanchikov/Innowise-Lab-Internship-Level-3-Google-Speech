import { all } from "redux-saga/effects";
import {
  wordsWatcherGroup1Saga,
  wordsWatcherGroup2Saga,
  wordsWatcherGroup3Saga,
  wordsWatcherGroup4Saga,
  wordsWatcherGroup5Saga,
  wordsWatcherGroup6Saga,
} from "./wordsSaga";

export default function* rootSaga() {
  yield all([
    wordsWatcherGroup1Saga(),
    wordsWatcherGroup2Saga(),
    wordsWatcherGroup3Saga(),
    wordsWatcherGroup4Saga(),
    wordsWatcherGroup5Saga(),
    wordsWatcherGroup6Saga(),
  ]);
}
