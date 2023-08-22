import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background};
  margin: 0 auto;
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
    margin-bottom: 2.2rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  img {
    width: 64rem;
    height: 58rem;
  }
`

export const Info = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  .product-category {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors['text-dark']};
    margin-bottom: 1.2rem;
  }

  .product-name {
    font-weight: 300;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.colors['text-dark']};
    margin-bottom: 0.4rem;
  }

  .product-price {
    color: ${({ theme }) => theme.colors.price};
    font-weight: 600;
    font-size: 2rem;
    margin-bottom: 2.4rem;
  }

  .product-title-description {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 0.8rem;
  }

  .product-description {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors['text-dark']};
  }

  span {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors['text-dark']};
    margin-bottom: 5.8rem;
  }
`

export const AddProductButton = styled.button`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;
  font-weight: 500;
  padding: 1rem 10.8rem;
  gap: 1.2rem;
  justify-content: center;
  margin-top: auto;
  svg {
    path {
      stroke: ${({ theme }) => theme.colors.white};
    }
  }
`
