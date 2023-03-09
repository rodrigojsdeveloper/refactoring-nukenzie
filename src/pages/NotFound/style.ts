import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 20px;
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

    & > a {
      width: 100%;
      max-width: 314px;
      height: 48px;

      font-weight: 500;
      font-size: 16px;
      color: var(--white);

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      gap: 10px;
      padding: 15px;

      border-radius: 4px;
      background-color: var(--background-button-home);
      border: 1px solid var(--background-button-home);
      box-shadow: var(--box-shadow-button-dashboard) 0 1px 0 0 inset;

      white-space: nowrap;
      vertical-align: baseline;
      touch-action: manipulation;

      :hover,
      :focus {
        background-color: var(--background-button-home-hover);
      }

      :focus {
        box-shadow: 0 0 0 4px var(--background-button-home);
      }

      :active {
        background-color: var(--background-button-home-hover);
        box-shadow: none;
      }
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
