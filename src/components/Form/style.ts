import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  max-width: 363px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 1px solid var(--grey-6);
  border-radius: var(--border-radius);

  gap: 10px;
  padding: 30px 20px;

  & > .description-input {
    & > span {
      color: var(--grey-7);
      font-size: 12px;
      padding-top: 5px;
    }
  }

  & > .value-type {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    & > label {
      font-size: 12px;

      padding: 10px 0 5px 0;
      color: var(--grey-9);
    }

    & > select {
      width: 100%;
      height: 48px;

      color: var(--grey-7);
      border: 1px solid var(--grey-6);
      border-radius: var(--border-radius);
      background-color: var(--color-white);

      padding: 0 10px;

      appearance: none;
      background-image: url('data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 10.127L12 18.127L20 10.127H4Z" fill="%23868E96"/></svg>');
      background-repeat: no-repeat;
      background-position: 0;
      background-position-x: 97.5%;

      &:focus {
        border: 2px solid var(--grey-9);
        background-image: url('data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 15.873L12 7.873L20 15.873H4Z" fill="%23868E96"/></svg>');
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

    border-radius: var(--border-radius);
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

    &:active {
      border-color: var(--color-primary-2);
      background-color: var(--color-primary-2);
    }
  }
`;

export { Container };
