import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { phraseSelector, loadingSelector } from '../../redux/phrases/phrases.selectors';
import { getPhrase } from '../../redux/phrases/phrases.slice';

import Button from '../Button/Button';
import {
  Area, Image, Content, Phrase,
} from './Card.styled';

export default function Card() {
  const dispatch = useDispatch();
  const phrase = useSelector(phraseSelector);
  const loading = useSelector(loadingSelector);

  useEffect(() => {
    dispatch(getPhrase());
  }, [])
  return (
    <Area>
      <Image />

      <Content>
        {loading ? (
          <Phrase>Loading phrase...</Phrase>
        ) : (
          <>
            <Phrase>{phrase.content}</Phrase>
            <Button
              msg="New phrase"
              onClick={() => {
                dispatch(getPhrase());
              }}
            />
          </>
        )}

      </Content>
    </Area>
  );
}
