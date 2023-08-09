import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 8px;
  img {
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    width: 11.6rem;
    height: 15rem;
  }

  @media (min-width: 768px) {
    img {
      width: 25.6rem;
      height: 30rem;
    }
  }
`

export const Wrapper = styled.div`
  padding: 0.4rem 0.8rem;
  .product-description {
    color: ${({ theme }) => theme.colors['text-dark']};
    font-size: 0.8rem;
  }

  .product-price {
    color: ${({ theme }) => theme.colors.price};
    font-weight: 600;
    font-size: 0.8rem;
  }

  @media (min-width: 768px) {
    padding: 0.8rem 1.2rem;
    .product-description {
      font-size: 1.6rem;
    }

    .product-price {
      font-size: 1.4rem;
    }
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
