import { styled } from 'styled-components'

interface ContainerProps {
  $show?: boolean
}

export const Container = styled.ul<ContainerProps>`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;
  display: ${({ $show }) => ($show ? 'display' : 'none')};
  flex-direction: column;
  max-height: 12rem;
  margin-top: 0.2rem;

  overflow-y: auto;
  background-color: ${({ theme }) => theme.colors.white};
  list-style: none;
  padding: 1.2rem 1.6rem;
  border-radius: 0.4rem;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.2);

  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 0.25rem;
  }

  @media (min-width: 768px) {
    max-width: 17.6rem;
    width: 100%;
  }
`
