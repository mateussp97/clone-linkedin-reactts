import styled from "styled-components";

export const Container = styled.div`
  margin-top: 16px;

  @media (min-width: 1180px) {
    margin-top: 24px;
  }

  > div {
    padding: 16px 40px 52px 12px;

    header {
      display: flex;

      .avatar-skeleton {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        flex-shrink: 0;
      }

      .column {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 16px;
        flex: 1;

        .row-skeleton {
          height: 12px;

          &:nth-child(1) {
            width: 30%;
          }

          &:nth-child(2) {
            width: 55%;
            margin-top: 12px;
          }
        }
      }
    }

    span {
      display: flex;
      flex-direction: column;
      margin-top: 32px;

      .row-skeleton {
        height: 12px;

        &:nth-child(1) {
          width: 100%;
        }

        &:nth-child(2) {
          width: 80%;
          margin-top: 12px;
        }
      }
    }
  }
`;
