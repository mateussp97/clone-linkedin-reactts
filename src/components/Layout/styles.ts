import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  > span {
    margin-top: 3rem;
    display: flex;
  }

  @media (min-width: 1180px) {
    > main {
      margin: 0 2rem;
      display: flex;
      justify-content: center;
    }

    > span {
      margin-top: 3.5rem;
      padding: 0.5rem 0;
    }
  }

  .left-column,
  .right-column,
  .ad-banner {
    display: none;
  }

  @media (min-width: 1180px) {
    .left-column,
    .right-column,
    .ad-banner {
      display: unset;
    }
    .middle-column {
      margin: 0 1.5rem 1rem;
    }
  }
`;
