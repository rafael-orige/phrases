import { PayloadAction } from '@reduxjs/toolkit';
import { SetData, SetError, SetLoading, GetPhrase } from './phrases.type';

const getPhrase: GetPhrase = (state, action) => { }

const setData: SetData = (state, action) => {
  state.data = action.payload;
};

const setError: SetError = (state, action) => {
  state.error = action.payload;
}

const setLoading: SetLoading = (state, action) => {
  state.loading = action.payload
}

export const reducers = {
  setData,
  setError,
  setLoading,
  getPhrase
};
