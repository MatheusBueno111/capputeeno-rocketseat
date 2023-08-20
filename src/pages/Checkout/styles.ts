import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background};
  gap: 3.2rem;

  @media (min-width: 768px) {
    max-width: 1440px;
    padding: 2rem 16rem;
    justify-content: space-between;
  }

  .link-to-home {
    display: flex;
    gap: 0.8rem;
    width: fit-content;
    color: ${({ theme }) => theme.colors['text-span']};
    font-weight: 500;
    margin-top: 2.35rem;
    margin-bottom: 0.6rem;
  }

  p {
    margin-bottom: 2.3rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const CheckoutList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`
