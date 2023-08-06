import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  gap: 1rem;

  @media (min-width: 768px) {
    padding: 3.2rem 16rem;
    max-width: 1440px;
    width: 100%;
    gap: 2.8rem;
  }
`
