import { styled } from 'styled-components'

export const Skeleton = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  animation: skeleton 1s ease infinite alternate;
  background-color: ${({ theme }) => theme.colors.whiteLight};
  border-radius: 0.4rem;
  .skeleton-image {
    width: 25.6rem;
    height: 30rem;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    /* background-color: #9e9fa5; */
    background-color: #9e9fa5;
    opacity: 0.2;
  }

  .skeleton-product-info {
    display: flex;
    flex-direction: column;
    padding: 0.8rem;
    align-items: center;
  }

  @keyframes skeleton {
    to {
      opacity: 0.5;
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
