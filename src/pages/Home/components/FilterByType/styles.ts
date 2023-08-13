import { styled } from 'styled-components'

interface FilterByTypeProps {
  selected: boolean
}

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
  padding: auto;
  @media (min-width: 768px) {
    gap: 4rem;
    justify-content: unset;
  }
`

export const Filter = styled.div<FilterByTypeProps>`
  cursor: pointer;
  border-bottom: 0.4rem solid
    ${({ selected, theme }) => (selected ? theme.colors.orange : 'none')};
  color: ${({ selected, theme }) =>
    selected ? theme.colors['text-dark'] : theme.colors.text};
  font-size: 1rem;
  font-weight: ${({ selected }) => (selected ? '600' : '400')};
  position: relative;

  /* &:before {
    position: absolute;
    content: '';
    height: 4px;
    background-color: ${({ theme }) => theme.colors.orange};
    top: 2.5rem;
    width: 0;
    transition: width 0.3s;
  }

  &:hover {
    &:before {
      position: absolute;
      content: '';
      height: 4px;
      background-color: ${({ theme }) => theme.colors.orange};
      top: 2.5rem;
      width: 100%;
    }
  } */

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`
