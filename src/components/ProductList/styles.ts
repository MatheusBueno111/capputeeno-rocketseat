import { styled } from 'styled-components'

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(auto-fill, minmax(240px, auto));
  justify-content: center;
  grid-gap: 2rem;
  /* grid-template-columns: repeat(
    auto-fill,
    minmax(240px, 1fr)
  ); // Responsive grid columns
  grid-gap: 2rem; */

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, auto));
  }
`
