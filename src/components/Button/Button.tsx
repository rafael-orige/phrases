import React from 'react';

import { ButtonPrimary } from './Button.styled';
import { Props } from './Button.type';

export default function Button({
  msg,
  onClick = () => alert('No function assigned'),
  align = 'left',
}: Props) {
  return (
    <ButtonPrimary
      align={align}
      onClick={() => onClick()}
    >
      {msg}
    </ButtonPrimary>
  );
}
