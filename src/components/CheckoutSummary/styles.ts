import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 35.2rem;
  padding: 1.6rem 2.4rem;
  background-color: ${({ theme }) => theme.colors.white};

  h4 {
    color: ${({ theme }) => theme.colors['text-dark']};
    margin-bottom: 3rem;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .total-price {
    font-weight: 600;
    color: ${({ theme }) => theme.colors['text-dark']};
  }
`

export const Divider = styled.div`
  display: flex;
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.divider};

  margin-top: 0.8rem;

  @media (min-width: 768px) {
    margin-bottom: 0.8rem;
    margin-top: 0.8rem;
  }
`

export const BuyButton = styled.button`
  display: flex;

  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  font-weight: 500;
  font-size: 1.6rem;
  padding: 1rem;
  border-radius: 0.4rem;
  margin-top: 4rem;
`

export const Footer = styled.footer`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: end;
  gap: 1.2rem;
  ul {
    font-size: 1.4rem;
    font-weight: 500;
    text-decoration-line: underline;
    color: ${({ theme }) => theme.colors.text};
  }
`
