import { IButtonLinkStyledProps } from "../../interfaces";
import styled, { css } from "styled-components";

const Container = styled.a<IButtonLinkStyledProps>`
  width: 100%;

  font-weight: 500;
  font-size: 16px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 10px;
  padding: 15px;

  border-radius: 4px;
  vertical-align: baseline;
  touch-action: manipulation;

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          max-width: 100px;
          height: 45px;
        `;

      case "medium":
        return css`
          max-width: 314px;
          height: 48px;
        `;

      default:
        return false;
    }
  }}

  ${({ color }) => {
    switch (color) {
      case "pink":
        return css`
          color: var(--white);
          background-color: var(--background-button-home);
          border: 1px solid var(--background-button-home);
          box-shadow: var(--box-shadow-button-dashboard) 0 1px 0 0 inset;

          white-space: nowrap;

          &:hover {
            background-color: var(--background-button-home-hover);
          }
        `;

      case "gray":
        return css`
          color: var(--color-button);
          background-color: var(--white);
          border: 1px solid var(--border-button);
          box-shadow: var(--box-shadow-button) 0 1px 3px 0;

          transition: all 250ms;

          &:hover {
            transform: translateY(-1px);
            box-shadow: var(--border-button) 0 4px 12px;
            border-color: var(--border-color-hover-button);
          }
        `;

      default:
        return false;
    }
  }}
`;

export { Container };
