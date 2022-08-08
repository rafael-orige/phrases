import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { all } from 'redux-saga/effects';
import phrasesSlice from '../phrases/phrases.slice';
import { phrasesSaga } from '../phrases/phrases.saga';

function* storeSaga() {
  yield all([
    ...phrasesSaga
  ]);
}

const saga = createSagaMiddleware()

const store = configureStore({
  reducer: {
    phrases: phrasesSlice.reducer,
  },
  middleware: [saga]
});

saga.run(storeSaga);

export default store;
