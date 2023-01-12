import lixeira_hover from "../../assets/trash-hover.svg";
import lixeira from "../../assets/trash.svg";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 560px;

  background: var(--background-header-dashboard);
  border-radius: 4px;
  margin-bottom: 35px;

  flex-direction: row;

  &:hover {
    background: var(--white);
    box-shadow: 0px 4px 42px -12px var(--color-box-shadow);

    transition: 0.75s;
  }

  & > hr {
    width: 4px;
    border: none;
    border-radius: 4px 0px 0px 4px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    max-width: 535px;
    width: 100%;
    padding: 5px 10px 0 10px;

    flex-direction: row;
  }

  & > div > div {
    display: flex;
  }

  .divCardLeft {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    color: var(--background-home);

    & h2 {
      max-width: 285px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .divCardLeft > span {
    font-size: 12px;
    color: var(--color-price-card);
    margin-bottom: 10px;
  }

  .divCardRight {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .divCardRight > span {
    font-size: 12px;

    margin-right: 120px;
  }

  .divCardRight > button {
    width: 22px;
    height: 22px;
    cursor: pointer;
    background: var(--background-button-dashboard);
    background: url(${lixeira});

    transition: 1s;

    font-size: 12px;
  }

  .divCardRight > button:hover {
    background: url(${lixeira_hover});
    .divCardRight > span {
      margin-right: 20px;
    }
  }

  @media (max-width: 600px) {
    & > div {
      flex-direction: column;

      .divCardLeft,
      .divCardRight {
        flex-direction: column;

        span {
          margin-bottom: 0;
        }

        h2,
        span,
        button {
          padding: 0;
          margin-top: 10px;
        }

        button {
          margin-bottom: 15px;
        }
      }
    }
  }

  @media (max-width: 320px) {

    .divCardLeft {
      & > h2 {
        white-space: unset;
        max-width: unset;
        font-size: 14px;
      }
    }
  }
`;

export { Container };
