import lixeira_hover from "../../assets/trash-hover.svg";
import styled, { keyframes } from "styled-components";
import lixeira from "../../assets/trash.svg";

const cardAnimation = keyframes`
  to {
    transform: translate(0);
    opacity: 1
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 560px;

  display: flex;
  flex-direction: row;

  border-radius: 4px;
  background-color: var(--background-header-dashboard);

  opacity: 0;
  transform: translate(-100px);
  animation: ${cardAnimation} 0.5s ease forwards;

  margin-bottom: 25px;

  & > hr {
    width: 4px;
    border: none;
    border-radius: 4px 0px 0px 4px;
  }

  & > div {
    width: 100%;
    max-width: 535px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    padding: 5px 10px 0 10px;

    & > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      padding: 10px 0;

      & h2 {
        font-size: 16px;
        color: var(--background-home);

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        
        padding-bottom: 35px;
      }

      & > span {
        font-size: 12px;
        color: var(--color-price-card);
      }
    }

    & > div:nth-child(2) {
      width: 100%;
      max-width: 200px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & > span {
        font-weight: 600;
        font-size: 12px;
      }

      & > button {
        width: 22px;
        height: 22px;

        cursor: pointer;
        background: url(${lixeira});
        background-color: var(--background-button-dashboard);

        transition: 1s;

        &:hover {
          background: url(${lixeira_hover});
        }
      }

      .divCardRight > span {
        margin-right: 20px;
      }
    }
  }

  @media (max-width: 425px) {
    & > div {
      flex-direction: column;

      & > div:nth-child(2) {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        padding-bottom: 10px;

        & > span {
          padding-bottom: 10px;
        }
      }
    }
  }
`;

export { Container };
