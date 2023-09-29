import styled from "styled-components";

const Container = styled.div`
  & > p {
    padding-bottom: 35px;
  }

  & > svg {
    width: 100%;
    max-width: 550px;
  }

  @media (max-width: 768px) {
    & > p {
      text-align: center;
    }
  }
`;

export { Container };
