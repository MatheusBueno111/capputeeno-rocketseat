import { styled } from 'styled-components'

export const Button = styled.button`
  display: flex;
  flex: 1;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.4rem;
  justify-content: flex-end;
  gap: 0.8rem;

  align-items: center;
  span {
    font-size: 1.2rem;
  }

  svg {
    width: 1.2rem;
  }

  @media (min-width: 768px) {
    justify-content: flex-end;

    span {
      font-size: 1.4rem;
    }

    svg {
      width: unset;
    }
  }
`
