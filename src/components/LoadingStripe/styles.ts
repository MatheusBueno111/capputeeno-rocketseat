import { styled } from 'styled-components'

interface ContainerProps {
  height: string
  width: string
  margin?: string
}

export const Container = styled.div<ContainerProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  background-color: #9e9fa5;
  animation: skeleton 1s ease infinite alternate;
  margin: ${({ margin }) => margin || '0'};

  @keyframes skeleton {
    to {
      opacity: 0.5;
    }
  }
`
