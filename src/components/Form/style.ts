import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  max-width: 363px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 4px;
  border: 1px solid var(--grey-7);

  gap: 10px;
  padding: 30px 20px;

  & > div:nth-child(1) {
    & > span {
      color: var(--grey-3);
      font-size: 12px;
      padding-top: 5px;
    }
  }

  & > div:nth-child(3) {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    & > label {
      font-size: 12px;

      padding: 10px 0 5px 0;
      color: var(--grey-4);
    }

    & > select {
      width: 100%;
      height: 48px;

      border-radius: 4px;
      background-color: var(--color-white);
      border: 1px solid var(--grey-7);

      padding: 0 10px;
      cursor: pointer;

      &:focus {
        border: 2px solid var(--grey-4);
      }
    }
  }

  & > button {
    width: 100%;
    height: 48px;

    font-weight: 500;
    font-size: 16px;
    color: var(--color-white);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 10px;
    padding: 15px;

    border-radius: 4px;
    background-color: var(--color-primary);
    border: 1px solid var(--color-primary);
    box-shadow: var(--shadow-6) 0 1px 0 0 inset;

    white-space: nowrap;
    vertical-align: baseline;
    touch-action: manipulation;

    transition: 0.5s;

    &:hover {
      box-shadow: none;
    }
  }
`;

export { Container };
