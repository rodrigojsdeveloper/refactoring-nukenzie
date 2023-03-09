import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 88px;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 40px;

  background-color: var(--grey-1);
  box-shadow: 0px 4px 32px -12px var(--shadow-4);

  & > div {
    width: 100%;
    max-width: 1440px;

    margin: 0 auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > img {
      width: 123px;
      height: 20px;
    }
  }

  @media (max-width: 1024px) {
    padding: 0 20px;
  }
`;

export { Container };
