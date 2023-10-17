import styled, { keyframes } from "styled-components";

const cardAnimation = keyframes`
  to {
    transform: translate(0);
    opacity: 1
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 560px;
  height: 87px;

  display: flex;
  flex-direction: row;

  background-color: var(--grey-1);
  border-radius: var(--border-radius);

  opacity: 0;
  transform: translate(-100px);
  animation: ${cardAnimation} 0.5s ease forwards;

  & > hr {
    width: 4px;
    border-radius: var(--border-radius) 0px 0px var(--border-radius);
  }

  & > .card-description {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 8px 14px;

    & > .card-content {
      height: 68px;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;

      & h2 {
        font-size: 16px;
        color: var(--grey-9);

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        padding-bottom: 35px;
      }

      & > span {
        font-size: 12px;
        color: var(--grey-8);
      }
    }

    & > .card-actions {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      & > span {
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;

        margin-bottom: 6px;
      }

      & > button {
        width: 49px;
        height: 19px;

        font-weight: 400;
        font-size: 10px;

        background-color: var(--grey-4);
        border: 2px solid var(--grey-4);

        &:hover {
          border-color: var(--grey-5);
          background-color: var(--grey-5);
        }

        &:active {
          border-color: var(--grey-6);
          background-color: var(--grey-6);
        }
      }
    }

    @media (max-width: 640px) {
      flex-direction: column;
      align-items: flex-start;

      & > .card-actions {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        & > span {
          padding-bottom: 10px;
        }
      }
    }
  }

  @media (max-width: 640px) {
    height: 156px;
  }
`;

export { Container };
