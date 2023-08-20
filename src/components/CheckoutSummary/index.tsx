import React from 'react'
import * as S from './styles'

const CheckoutSummary: React.FC = () => {
  return (
    <S.Container>
      <h4>RESUMO DO PEDIDO</h4>
      <S.Info>
        <div>
          <span>Subtotal de Produtos</span>
          <span>R$ 161,00</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 40,00</span>
        </div>
        <S.Divider />
        <div>
          <span className="total-price">Total</span>
          <span className="total-price">R$ 201,00</span>
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
