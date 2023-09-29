import styled from "styled-components";

const Container = styled.main`
  min-height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 20px;

  color: var(--color-white);
  background-color: var(--grey-9);

  & > div {
    width: 100%;
    max-width: 1024px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > div {
      & > h1 {
        width: 100%;
        max-width: 324px;

        padding: 23px 0;

        font-size: 38px;
        line-height: 48px;
      }

      & > p {
        padding-bottom: 15px;
      }
    }

    & > svg {
      width: 100%;
      max-width: 593px;
    }

    @media (max-width: 1024px) {
      & > svg {
        display: none;
      }
    }
  }
`;

export { Container };
