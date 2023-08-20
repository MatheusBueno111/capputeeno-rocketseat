import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'
import { ArrowCircleUpLeft } from '../../components/Icons/ArrowCircleUpLeft'
import CheckoutCard from '../../components/CheckoutCard'
import CheckoutSummary from '../../components/CheckoutSummary'

const Checkout: React.FC = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <Link to="/" className="link-to-home">
          <ArrowCircleUpLeft />
          Voltar
        </Link>
        <h3>SEU CARRINHO</h3>
        <p>
          Total (3 produtos)<span>R$161,00</span>
        </p>
        <S.CheckoutList>
          <CheckoutCard />
          <CheckoutCard />
        </S.CheckoutList>
      </S.Wrapper>
      <CheckoutSummary />
    </S.Container>
  )
}

export default Checkout
