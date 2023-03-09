import styled from "styled-components";

const Container = styled.div`
  & > label {
    font-size: 12px;
    color: var(--grey-4);

    text-align: left;
  }

  & > input {
    width: 100%;
    height: 52.8px;

    gap: 10px;
    padding: 0 16px;

    border-radius: 4px;
    border: 1px solid var(--grey-7);
    background-color: var(--color-white);

    margin: 10px 0 5px 0;

    &:focus {
      border: 2px solid var(--grey-4);
    }

    &:focus::-webkit-input-placeholder {
      color: transparent;
    }
  }
`;

export { Container };
