import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 40px;
  margin: 0 auto;

  & > div {
    & > h1 {
      font-size: 38px;
      line-height: 50px;
    }

    & > p {
      font-size: 16px;
      width: 100%;
      max-width: 334px;
      line-height: 24px;

      padding: 15px 0 25px 0;
    }
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;

    & > img {
      padding-top: 50px;
    }
  }

  @media (max-width: 440px) {
    & > img {
      width: 100%;
    }
  }
`;

export { Container };
