import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  max-width: 363px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 4px;
  border: 1px solid var(--border-input);

  gap: 10px;
  padding: 30px 20px;

  & > div:nth-child(1) {
    & > span {
      color: var(--color-span);
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
      color: var(--background-home);
    }

    & > select {
      width: 100%;
      height: 48px;

      border-radius: 4px;
      background-color: var(--white);
      border: 1px solid var(--border-input);

      padding: 0 10px;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }
  }
`;

export { Container };
