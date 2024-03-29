import { IButtonStyle } from "../../interfaces";
import styled, { css } from "styled-components";

const Container = styled.a<IButtonStyle>`
  width: 100%;

  font-weight: 500;
  font-size: 16px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 10px;
  padding: 15px;

  transition: 0.5s;
  border-radius: var(--border-radius);

  ${({ size }) => {
    switch (size) {
      case "100px":
        return css`
          max-width: 100px;
          height: 45px;
        `;

      case "314px":
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
          color: var(--color-white);
          background-color: var(--color-primary);
          border: 1px solid var(--color-primary);
          box-shadow: var(--shadow-6) 0 1px 0 0 inset;

          white-space: nowrap;

          &:hover {
            box-shadow: none;
          }

          &:active {
            border-color: var(--color-primary-2);
            background-color: var(--color-primary-2);
          }
        `;

      case "gray":
        return css`
          color: var(--shadow-5);
          background-color: var(--color-white);
          border: 1.5px solid var(--shadow);

          &:hover {
            background-color: var(--gray0);
          }

          &:active {
            background-color: var(--grey-3);
          }
        `;

      default:
        return false;
    }
  }}
`;

export { Container };
