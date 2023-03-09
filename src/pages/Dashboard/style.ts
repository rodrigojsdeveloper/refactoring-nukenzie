import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  max-width: 1440px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 10px;
  margin: 39px auto;

  @media (max-width: 1024px) {
    flex-direction: column;

    margin: 29px auto;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 363px;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: 30px;

  @media (max-width: 1024px) {
    margin: 0;
  }
`;

export { Container, Content };
