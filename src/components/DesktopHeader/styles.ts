import styled, { css } from "styled-components";
import { GrLinkedin } from "react-icons/gr";
import { AiFillHome, AiOutlineBell, AiFillCaretDown } from "react-icons/ai";

export const Container = styled.header`
  background: var(--color-header);
  padding: 0 2rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  display: none;

  @media (min-width: 1180px) {
    display: unset;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  flex: 1;

  max-width: 1128px;
  height: 52px;
  margin: 0 auto;

  .left,
  .right nav {
    display: flex;
    align-items: center;
  }

  .right nav {
    height: 100%;

    button {
      background: none;
      border: none;
      outline: none;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      min-width: 5.5rem;
      min-height: 100%;
      color: var(--color-icons);

      cursor: pointer;

      &:hover {
        color: var(--color-white);
      }

      &.active {
        color: var(--color-white);
        border-bottom: 2px solid var(--color-white);
      }
    }
  }
`;

export const LinkedInIcon = styled(GrLinkedin)`
  height: 2rem;
  width: 2rem;
  color: var(--color-linkedin);
  background: #fff;
  border-radius: 0.25rem;
  flex-shrink: 0;
`;

export const SearchInput = styled.input`
  margin-left: 1rem;

  background: var(--color-input);
  color: var(--color-black);
  font-size: 0.875rem;
  padding: 0.25rem;
  border: none;
  outline: none;
  border-radius: 0.25rem;

  &:focus {
    background: var(--color-white);
  }
`;

const generalIconCSS = css`
  width: 1.5rem;
  height: 1.5rem;
`;

export const HomeIcon = styled(AiFillHome)`
  ${generalIconCSS}
`;

export const NotificationIcon = styled(AiOutlineBell)`
  ${generalIconCSS}
`;

export const ProfileCircle = styled.img`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  border: 1px solid var(--color-icons);
`;

export const CaretDownIcon = styled(AiFillCaretDown)`
  width: 1rem;
  height: 1rem;
`;
