import { InputStyledProps } from "../../interfaces";
import styled, { css } from "styled-components";

const Container = styled.div`
  text-align: left;

  div {
    padding: 10px 0 5px 0;
    font-size: 12px;
    color: var(--background-home);

    span {
      color: var(--color-error-label);
    }
  }
`;

const InputContainer = styled.input<InputStyledProps>`
  border: 1px solid var(--border-input);
  border-radius: 4px;
  padding: 0 16px;
  gap: 10px;

  &:focus {
    border: 2px solid var(--background-home);
  }

  &:focus::-webkit-input-placeholder {
    color: transparent;
  }

  ${({ sizeInput }) => {
    switch (sizeInput) {
      case "m":
        return css`
          height: 52.8px;
          width: 100%;
          max-width: 314px;
        `;

      case "s":
        return css`
          width: 100%;
          max-width: 128px;
          height: 48px;
        `;

      default:
        return false;
    }
  }}
`;

export { Container, InputContainer };
