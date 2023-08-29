import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'
import { ArrowCircleUpLeft } from '../../components/Icons/ArrowCircleUpLeft'
import CheckoutCard from '../../components/CheckoutCard'
import CheckoutSummary from '../../components/CheckoutSummary'
import { useAppSelector } from '../../redux/hooks'
import { useCart } from '../../redux/cartSlice'
import { centavosParaReais } from '../../utils/formattedPrice'

const Checkout: React.FC = () => {
  const cart = useAppSelector(useCart)

  const total = cart.reduce((sumTotal, product) => {
    return sumTotal + product.price_in_cents * product.counter!
  }, 0)

  const totalProducts = cart.reduce((amountProducts, product) => {
    return amountProducts + product.counter!
  }, 0)
  console.log('cart', cart)
  return (
    <S.Container>
      <S.Wrapper>
        <Link to="/" className="link-to-home">
          <ArrowCircleUpLeft />
          Voltar
        </Link>
        <h3>SEU CARRINHO</h3>
        <p>
          Total ({totalProducts} produtos)
          <span>R$ {centavosParaReais(`${total}`)}</span>
        </p>
        <S.CheckoutList>
          {cart.length > 0 ? (
            cart.map((product) => (
              <CheckoutCard key={product.id} product={product} />
            ))
          ) : (
            <h1>Nenhum item adicionado ao carrinho</h1>
          )}
        </S.CheckoutList>
      </S.Wrapper>
      <CheckoutSummary />
    </S.Container>
  )
}

export default Checkout
