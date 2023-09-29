import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 361px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid var(--grey-6);
  border-radius: var(--border-radius);
  background-color: var(--color-white);

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

      color: var(--color-primary);
    }
  }
`;

export { Container };
