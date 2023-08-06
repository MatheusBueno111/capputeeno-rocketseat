import { styled } from 'styled-components'

interface IconProps {
  color?: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  justify-content: flex-end;
`

export const PaginationButton = styled.div<IconProps>`
  display: flex;
  width: 1.8rem;
  height: 1.8rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid transparent;
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
