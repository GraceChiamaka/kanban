import { all, take } from "redux-saga/effects";
import { REHYDRATE } from "redux-persist";
import rootColumnSaga from "./columns";

//Import all the sagas here and place them in the array below.

export function* rootSaga() {
  yield take(REHYDRATE);
  yield all([rootColumnSaga()]);
}
