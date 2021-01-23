import styled from 'styled-components';
import signInBackgroundImg from '../../assets/sign-in-bg.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: 0.2s;

      &:hover {
        filter: brightness(80%);
      }
    }
  }

  > a {
    color: #ff9000;
    display: flex;
    align-items: center;
    line-height: 12px;
    margin-top: 24px;
    text-decoration: none;
    transition: 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      filter: brightness(80%);
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
