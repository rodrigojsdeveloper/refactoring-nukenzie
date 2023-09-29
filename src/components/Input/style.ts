import styled from "styled-components";

const Container = styled.div`
  & > label {
    font-size: 12px;
    color: var(--grey-9);

    text-align: left;
  }

  & > input {
    width: 100%;
    height: 48px;

    gap: 10px;
    padding: 0 16px;

    border: 1px solid var(--grey-6);
    border-radius: var(--border-radius);
    background-color: var(--color-white);

    margin: 10px 0 5px 0;

    &:focus {
      border: 2px solid var(--grey-9);
    }

    &:focus::-webkit-input-placeholder {
      color: var(--transparent);
    }

    &::placeholder {
      color: var(--grey-7);
    }
  }
`;

export { Container };
