import { call, put, takeLatest } from "redux-saga/effects";
import { setUser, getUserFailed } from "../actions/user";
import userRequest from "../api/userRequest";
import { GET_USER } from "../constants";

export function* fetchUserSaga(payload) {
  try {
    const response = yield call(userRequest, payload);
    const { data } = response;
    yield put(setUser(data));
  } catch (error) {
    yield put(getUserFailed(error.message));
  }
}

function* userSaga() {
  yield takeLatest(GET_USER, fetchUserSaga);
}

export default userSaga;
