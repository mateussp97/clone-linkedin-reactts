import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 1180px) {
    > main {
      display: flex;
      align-items: start;
      justify-content: center;

      margin: 0 2rem;
    }
  }

  .left-column,
  .right-column {
    display: none;
  }

  @media (min-width: 1180px) {
    .left-column,
    .right-column {
      display: unset;
    }
    .middle-column {
      margin: 0 1.5rem 1rem;
    }
  }
`;
