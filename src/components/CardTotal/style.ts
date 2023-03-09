import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 361px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 4px;
  background: var(--white);
  border: 1px solid var(--border-input);

  padding: 10px;
  margin-top: 15px;

  & > p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    font-weight: 600;

    padding: 10px 0;

    & > p {
      padding-left: 7px;

      color: var(--background-button-home);
    }
  }
`;

export { Container };
