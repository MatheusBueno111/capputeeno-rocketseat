import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  border-radius: 0.4rem;
  width: 17.6rem;
`

export const Button = styled.button`
  display: flex;
  flex: 1;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.4rem;
  justify-content: flex-end;
  gap: 0.8rem;
`

export const OptionsContainer = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  list-style: none;
  padding: 1.2rem 1.6rem;
  border-radius: 0.4rem;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
`

export const OptionItem = styled.li`
  display: flex;
  flex: 1;
  cursor: pointer;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text};
  align-items: center;

  height: 2.4rem;
  padding: 0.1rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 0.4rem;
  }
`
