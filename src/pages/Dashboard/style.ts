import styled from "styled-components";

const Container = styled.main`
  margin: 0 auto;
  max-width: 1440px;
  padding: 10px;
  width: 100%;

  display: flex;
  justify-content: center;

  flex-direction: row;

  margin-top: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-right: 30px;

  @media (max-width: 1000px) {
    margin: 0;
  }
`;

export { Container, Content };
