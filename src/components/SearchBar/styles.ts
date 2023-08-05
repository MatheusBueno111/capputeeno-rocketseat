import { styled } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 20rem;
  width: 100%;

  padding: 0.45rem 0.8rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};

  input {
    all: unset;
    display: flex;
    flex: 1;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    overflow: hidden;
    text-overflow: ellipsis;
    ::placeholder {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  svg {
    width: 1.4rem;
  }

  @media (min-width: 768px) {
    max-width: 35.2rem;
    width: 100%;
    padding: 0.9rem 1.6rem;

    input {
      flex: 1;
      font-size: 1.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    svg {
      width: 2.4rem;
    }
  }
`
