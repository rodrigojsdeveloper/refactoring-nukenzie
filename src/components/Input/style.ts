import { InputStyledProps } from "../../interfaces";
import styled, { css } from "styled-components";

const Container = styled.div`
  text-align: left;

  div {
    padding: 10px 0 5px 0;
    font-size: 12px;
    color: var(--grey-4);
  }
`;

const InputContainer = styled.input<InputStyledProps>`
  border: 1px solid var(--grey-7);
  border-radius: 4px;
  padding: 0 16px;
  gap: 10px;

  width: 100%;

  &:focus {
    border: 2px solid var(--grey-4);
  }

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }

  ${({ sizeInput }) => {
    switch (sizeInput) {
      case "m":
        return css`
          height: 52.8px;
          max-width: 314px;
        `;

      case "s":
        return css`
          height: 48px;
        `;

      default:
        return false;
    }
  }}
`;

export { Container, InputContainer };
