import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./redusers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export type RootState = ReturnType<typeof store.getState>;
sagaMiddleware.run(rootSaga);
