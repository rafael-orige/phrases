import styled, { createGlobalStyle } from 'styled-components';

export const GlobalTheme = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    align-items: center;
    background-color: #242424;
    color: white;
    display: flex;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    justify-content: center;
    line-height: 24px;
    min-height: 100vh;
  }

  #root {
    height: 100%;
    width: 100%;
  }

  .App {
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 800px;
  width: 100%;
`;
