import styled from 'styled-components';
import Background from '../../assets/images/bg.jpg';

export const Area = styled.div`
  background-color: #b57e53;
  border-radius: 10px;
  display: flex;
  height: 400px;
  overflow: hidden;
  width: 100%;
`;

export const Image = styled.div`
  background-image: url(${Background});
  background-position: 27%;
  background-repeat: no-repeat;
  background-size: cover;
  width: 40%;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
`;

export const Phrase = styled.p`
  color: white;
  font-size: 1.2em;
  font-weight: 600;
  padding: 20px;
  text-align: center;
`;
