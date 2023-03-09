import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 20px;

  color: var(--white);
  background-color: var(--background-home);

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

    & > img {
      margin-left: 20px;
    }

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: flex-start;

      & > img {
        margin-left: 0;
        margin-top: 60px;
      }
    }

    @media (max-width: 768px) {
      & > img {
        width: 100%;
      }
    }
  }
`;

export { Container };
