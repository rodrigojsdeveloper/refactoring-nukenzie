import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 560px;
  padding: 5px;

  & > .list-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 10px 0 20px 0;

    & > h2 {
      font-size: 16px;
      color: var(--grey-9);
    }

    .list-nav {
      display: flex;
      flex-direction: row;

      & > button {
        width: 100%;
        height: 45px;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid var(--shadow);
        border-radius: var(--border-radius);
        background-color: var(--color-white);

        font-size: 16px;
        color: var(--shadow-5);

        padding: 15px;
        margin: 0 5px;
      }

      @media (max-width: 332px) {
        width: 100%;
        flex-direction: column;

        & > button {
          margin: 5px 0;
        }
      }
    }
  }

  & > .list-menu {
    & > p {
      padding-bottom: 35px;
    }

    & > img {
      width: 100%;
      max-width: 550px;
      max-height: 324px;
    }

    & > menu {
      height: 679px;
      overflow-y: auto;
    }
  }

  @media (max-width: 1024px) {
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .list-container {
      flex-direction: column;

      & > h2 {
        padding-bottom: 15px;
      }
    }

    .list-menu {
      & > p {
        text-align: center;
      }
    }
  }
`;

export { Container };
