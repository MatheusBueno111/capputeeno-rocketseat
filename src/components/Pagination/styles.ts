import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  justify-content: flex-end;
`

export const PaginationButton = styled.div`
  display: flex;
  width: 2.4rem;
  height: 2.4rem;
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid transparent;
  border-radius: 0.8rem;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.orange};
  }
`
