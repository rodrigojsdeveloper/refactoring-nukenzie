import styled from "styled-components";

const Container = styled.header`
  background: var(--background-header-dashboard);
  box-shadow: 0px 4px 32px -12px var(--color-box-shadow);

  padding: 0 40px;

  height: 88px;

  display: flex;
  align-items: center;

  & > div {
    width: 100%;
    max-width: 1440px;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  @media (max-width: 300px) {
    padding: 0 20px;

    & > div img {
      width: 100px;
    }
  }
`;

export { Container };
