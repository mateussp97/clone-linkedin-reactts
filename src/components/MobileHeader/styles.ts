import styled from "styled-components";
import { FiMessageSquare } from "react-icons/fi";

export const Container = styled.div`
  background: var(--color-link);
  padding: 0 1rem;

  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  @media (min-width: 1180px) {
    display: none;
  }
`;

export const ProfileCircle = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  border: 1px solid var(--color-icons);
`;

export const SearchInput = styled.input`
  width: 100%;

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

export const MessageIcon = styled(FiMessageSquare)`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-white);
  border-radius: 0.25rem;
  flex-shrink: 0.5rem;

  margin-left: 1rem;
`;
