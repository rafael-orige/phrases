import { PayloadAction } from "@reduxjs/toolkit";

export type Phrases = {
  data: Data,
  error: string,
  loading: boolean
};

export type Data = {
  _id: string,
  content: string,
  author: string,
  authorSlug: string,
  length: number,
  tags: string[]
};


type Action<Payload> = (state: Phrases, action: PayloadAction<Payload>) => void;

export type GetPhrase = Action<undefined>;
export type SetData = Action<Data>;
export type SetError = Action<string>;
export type SetLoading = Action<boolean>;