import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 560px;
  padding: 5px;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 10px 0 20px 0;

    & > h2 {
      font-size: 16px;
      color: var(--background-home);
    }

    & > div {
      display: flex;
      flex-direction: row;

      & > button {
        margin: 0 5px;

        width: 100%;
        height: 45px;

        font-weight: 500;
        font-size: 16px;
        color: var(--color-button);

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        gap: 10px;
        padding: 15px;

        border-radius: 4px;
        background-color: var(--white);
        border: 1px solid var(--border-button);
        box-shadow: var(--box-shadow-button) 0 1px 3px 0;

        transition: all 250ms;
        vertical-align: baseline;
        touch-action: manipulation;

        &:hover {
          transform: translateY(-1px);
          box-shadow: var(--border-button) 0 4px 12px;
          border-color: var(--border-color-hover-button);
        }
      }

      @media (max-width: 320px) {
        width: 100%;
        flex-direction: column;

        & > button {
          margin: 5px 0;
        }
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;

      & > h2 {
        padding-bottom: 15px;
      }
    }
  }

  & > div:nth-child(2) {
    & > h2 {
      padding-bottom: 35px;

      @media (max-width: 768px) {
        text-align: center;
      }
    }

    & > img {
      width: 100%;
    }

    & > menu {
      height: 679px;
      overflow-y: auto;
    }
  }

  @media (max-width: 1024px) {
    margin: 0 auto;
  }
`;

export { Container };
