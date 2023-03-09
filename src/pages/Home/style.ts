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

      & > a {
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
