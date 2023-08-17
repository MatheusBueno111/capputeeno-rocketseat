import React from 'react'
import { Link, useParams } from 'react-router-dom'
import * as S from './styles'
import { ArrowCircleUpLeft } from '../Icons/ArrowCircleUpLeft'
import { CartIcon } from '../Icons/CartIcon'

const ProductInfo: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  return (
    <S.Container>
      <Link to="/" className="link-to-home">
        <ArrowCircleUpLeft />
        Voltar
      </Link>
      {id}
      <S.Wrapper>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <S.Info>
          <p className="product-category">Caneca</p>
          <h2 className="product-name">Caneca de cerâmica rústica</h2>
          <p className="product-price">R$ 40,00</p>
          <span>
            *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
            R$900,00.
          </span>
          <p className="product-title-description">Descrição</p>
          <p className="product-description">
            Aqui vem um texto descritivo do produto, esta caixa de texto servirá
            apenas de exemplo para que simule algum texto que venha a ser
            inserido nesse campo, descrevendo tal produto.
          </p>
          <S.AddProductButton>
            <CartIcon />
            Adicionar ao carrinho
          </S.AddProductButton>
        </S.Info>
      </S.Wrapper>
    </S.Container>
  )
}

export default ProductInfo
