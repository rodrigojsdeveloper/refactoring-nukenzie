import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 560px;

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

      column-gap: 6px;

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
      }
    }
  }

  & > .list-menu {
    & > menu {
      height: 393px;

      display: flex;
      flex-direction: column;

      overflow-y: auto;
      row-gap: 15px;
    }
  }

  @media (max-width: 1024px) {
    margin: 20px auto 0;
  }

  @media (max-width: 640px) {
    .list-container {
      flex-direction: column;
      row-gap: 10px;
    }
  }
`;

export { Container };
