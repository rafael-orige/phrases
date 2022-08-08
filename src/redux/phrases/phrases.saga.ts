import { put, call, takeLatest } from 'redux-saga/effects';
import phrasesService from '../../services/phrases';
import { setData, setError, setLoading } from './phrases.slice';
import { Data } from './phrases.type';

function* getPhrase() {
  yield put(setLoading(true))
  try {
    const response: Data = yield call(phrasesService().getRandPhrase);

    yield put(setData(response));
    yield put(setError(''));
  } catch (e: any) {
    yield put(setError(e.message));
  }
  yield put(setLoading(false));
}

export const phrasesSaga = [
  takeLatest('phrases/getPhrase', getPhrase),
]