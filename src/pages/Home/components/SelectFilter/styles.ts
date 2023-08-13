import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  border-radius: 0.4rem;

  @media (min-width: 768px) {
    max-width: 17.6rem;
    width: 100%;
  }
`

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

export const OptionsContainer = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  list-style: none;
  padding: 1.2rem 1.6rem;
  border-radius: 0.4rem;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    max-width: 17.6rem;
    width: 100%;
  }
`

export const OptionItem = styled.li`
  display: flex;

  flex: 1;
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  align-items: center;

  height: 2.4rem;
  padding: 0.1rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 0.4rem;
  }

  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`
