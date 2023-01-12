import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;

  min-height: 100vh;
  padding: 4rem 1rem;

  background: var(--background-home);
  color: var(--white);
`;

const Content = styled.div`
  width: 100%;
  max-width: 1024px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div h1 {
    font-size: 38px;
    line-height: 48px;
  }

  & > div small {
    font-size: 16px;
  }

  & > div div {
    width: 100%;
    max-width: 324px;

    padding: 23px 0;
  }

  .logo {
    display: flex;
    align-items: center;
    padding: 20px;

    img {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    .logo {
      padding: 0;
      img {
      }
    }
  }

  @media (max-width: 425px) {
    & > div div,
    .divBotao,
    button {
      max-width: unset;
      width: 100%;
    }

    button {
      padding: 0;
    }
  }
`;

export { Container, Content };
