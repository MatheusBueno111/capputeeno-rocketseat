import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const WrapperFilters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 768px) {
    gap: 4rem;
    justify-content: unset;
  }
`

export const Filter = styled.div`
  border-bottom: 4px solid ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`
