import { styled } from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  margin: 0 auto;
  justify-content: space-around;
  gap: 1rem;

  @media (min-width: 768px) {
    max-width: 1440px;
    padding: 2rem 16rem;
    justify-content: space-between;
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;

  img {
    width: 10rem;
  }

  @media (min-width: 768px) {
    img {
      all: unset;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex: 1;
  max-width: 25rem;
  .cart {
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;

    span {
      width: 1.2rem;
      height: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme }) => theme.colors.red};
      color: ${({ theme }) => theme.colors.white};
      font-size: 0.8rem;
      border-radius: 9999px;
      position: absolute;
      bottom: 2px;
      left: 15px;
      font-weight: 500;
    }
  }

  @media (min-width: 768px) {
    max-width: 40rem;
    gap: 2.4rem;

    .cart {
      span {
        width: 1.7rem;
        height: 1.7rem;
        font-size: 1rem;
      }
    }
  }
`
