import { styled } from 'styled-components'

interface SelectProps {
  width?: string
  padding?: string
  $border?: boolean
}

export const Container = styled.div<SelectProps>`
  display: flex;
  position: relative;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  width: ${({ width }) => width || 'fit-content'};
  padding: ${({ padding }) => padding || 'unset'};
  border: ${({ $border }) => ($border ? '1px solid #A8A8B3' : 'unset')};
  border-radius: 0.8rem;
`
