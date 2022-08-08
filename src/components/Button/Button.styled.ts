import styled from 'styled-components';

export const ButtonPrimary = styled.button<{ align: 'center' | 'right' | 'left' }>`
  align-self: ${(props) => props.align};
  background-color: #1a1a1a;
  border: 1px solid transparent;
  border-radius: 8px;
  color: inherit;
  cursor: pointer;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  padding: 0.6em 1.2em;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
