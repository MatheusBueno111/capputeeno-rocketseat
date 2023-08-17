import { styled } from 'styled-components'

type PageButtonProps = {
  $isSelected?: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  justify-content: flex-end;
`

export const PaginationButton = styled.button<PageButtonProps>`
  cursor: pointer;
  display: flex;
  width: 1.8rem;
  height: 1.8rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.whiteLight : theme.colors.gray};
  color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.orange : theme.colors.text};

  border: 1px solid
    ${({ theme, $isSelected }) =>
      $isSelected ? theme.colors.orange : 'transparent'};
  border-radius: 0.4rem;
  justify-content: center;
  align-items: center;

  svg {
    width: 1rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.whiteLight};
    border: 1px solid ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.orange};

    svg {
      path {
        stroke: ${({ theme }) => theme.colors.orange};
      }
    }
  }

  @media (min-width: 768px) {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 0.8rem;
    font-size: 1.6rem;
    svg {
      width: unset;
    }
  }
`
