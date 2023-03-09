import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 88px;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 40px;

  background-color: var(--background-header-dashboard);
  box-shadow: 0px 4px 32px -12px var(--color-box-shadow);

  & > div {
    width: 100%;
    max-width: 1440px;

    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > a {
      height: 45px;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      font-weight: 500;
      font-size: 16px;
      color: var(--color-button);

      gap: 10px;
      padding: 15px 20px;

      border-radius: 4px;
      background-color: var(--white);
      border: 1px solid var(--border-button);
      box-shadow: var(--box-shadow-button) 0 1px 3px 0;

      transition: all 250ms;
      vertical-align: baseline;
      touch-action: manipulation;

      :hover,
      :focus {
        transform: translateY(-1px);
        box-shadow: var(--border-button) 0 4px 12px;
        border-color: var(--border-color-hover-button);
      }

      :active {
        transform: translateY(0);
        border-color: var(--border-color-hover-button);
        box-shadow: var(--box-shadow-button) 0 2px 4px;
        background-color: var(--background-button-dashboard);
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 0 20px;
  }
`;

export { Container };
