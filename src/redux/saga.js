import { takeLatest, all, put, fork, call } from 'redux-saga/effects';
import { fetchFlickr } from './api';

export function* returnFlickr(action) {
	const response = yield call(fetchFlickr, action.Opt);
	console.log(response);
	yield put({ type: 'FLICKR_SUCCESS', payload: response.data.photos.photo });
}

export function* callFlickr() {
	yield takeLatest('FLICKR_START', returnFlickr);
}

export default function* rootSaga() {
	yield all([fork(callFlickr)]);
}
