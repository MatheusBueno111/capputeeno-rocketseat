import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const WrapperFilters = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
`

export const Filter = styled.div`
  border-bottom: 4px solid ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.text};
`
