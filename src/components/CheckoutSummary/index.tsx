import React from 'react'
import * as S from './styles'
import { useAppSelector } from '../../redux/hooks'
import { useCart } from '../../redux/cartSlice'
import { centavosParaReais } from '../../utils/formattedPrice'

const CheckoutSummary: React.FC = () => {
  const cart = useAppSelector(useCart)

  const subTotal = cart.reduce((sumSubTotal, product) => {
    return sumSubTotal + product.price_in_cents * product.counter!
  }, 0)
  const deliveryPrice = 4000
  const total = subTotal + deliveryPrice

  console.log('total', subTotal)
  return (
    <S.Container>
      <h4>RESUMO DO PEDIDO</h4>
      <S.Info>
        <div>
          <span>Subtotal de Produtos</span>
          <span>R$ {centavosParaReais(`${subTotal}`)}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 40,00</span>
        </div>
        <S.Divider />
        <div>
          <span className="total-price">Total</span>
          <span className="total-price">
            R$ {centavosParaReais(`${total}`)}
          </span>
        </div>
      </S.Info>
      <S.BuyButton>Finalizar a Compra</S.BuyButton>
      <S.Footer>
        <ul>AJUDA</ul>
        <ul>REEMBOLSOS</ul>
        <ul>ENTREGAS E FRETE</ul>
        <ul>TROCAS E DEVOLUÇÕES</ul>
      </S.Footer>
    </S.Container>
  )
}

export default CheckoutSummary
