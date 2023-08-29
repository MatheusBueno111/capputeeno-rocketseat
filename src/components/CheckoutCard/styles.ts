import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 73.6rem;
  min-height: 21.1rem;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.white};
  gap: 1.6rem;
  border-radius: 0.8rem;
  img {
    max-height: fit-content;
    max-width: 25.6rem;
    height: 100%;
    width: 100%;
    border-top-left-radius: 0.8rem;
    border-bottom-left-radius: 0.8rem;
  }
`

export const ProductInfo = styled.div`
  display: flex;
  max-width: 48rem;
  width: 100%;
  flex-direction: column;
  padding: 1.6rem 1.6rem 2.4rem 1.6rem;

  .product-description {
    display: flex;
    margin-top: 1.6rem;

    color: ${({ theme }) => theme.colors['text-dark']};
    text-align: justify;
    font-weight: 400;
    font-size: 1.2rem;
  }
`

export const Title = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors['text-dark']};
    margin: 0;
    font-weight: 300;
  }

  svg {
    align-items: center;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  .product-price {
    color: ${({ theme }) => theme.colors.price};
    font-weight: 600;
    font-size: 2rem;
    margin: 0;
  }
`
