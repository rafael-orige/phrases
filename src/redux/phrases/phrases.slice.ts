import { createSlice } from '@reduxjs/toolkit';
import { Phrases } from './phrases.type';
import { reducers } from './phrases.reducers';

const initialState: Phrases = {
  data: {
    _id: '0',
    content: '',
    author: '',
    authorSlug: '',
    length: 0,
    tags: [],
  },
  loading: false,
  error: '',
};

const phrasesSlice = createSlice({
  name: 'phrases',
  initialState,
  reducers,
});

export default phrasesSlice;
export const { setData, setError, setLoading, getPhrase } = phrasesSlice.actions;