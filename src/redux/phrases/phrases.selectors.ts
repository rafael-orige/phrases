import { Store } from "../store/store.type";

export const phraseSelector = (state: Store) => state.phrases.data;
export const loadingSelector = (state: Store) => state.phrases.loading;
