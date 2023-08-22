import React from 'react'
import { Link } from 'react-router-dom'
import * as S from './styles'
import { ArrowCircleUpLeft } from '../../components/Icons/ArrowCircleUpLeft'
import { CartIcon } from '../../components/Icons/CartIcon'
import { useProductsById } from '../../hook/useProductsById'
import { centavosParaReais } from '../../utils/formattedPrice'

const ProductInfo: React.FC = () => {
  const { product, isLoading } = useProductsById()

  return (
    <S.Container>
      <Link to="/" className="link-to-home">
        <ArrowCircleUpLeft />
        Voltar
      </Link>
      {isLoading ? (
        <h1>Carregando...</h1>
      ) : (
        <S.Wrapper>
          <img src={product?.image_url} alt="" />
          <S.Info>
            <p className="product-category">{product?.category}</p>
            <h2 className="product-name">{product?.name}</h2>
            <p className="product-price">
              R$ {centavosParaReais(`${product?.price_in_cents}`)}
            </p>
            <span>
              *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
              R$900,00.
            </span>
            <p className="product-title-description">Descrição</p>
            <p className="product-description">{product?.description}</p>
            <S.AddProductButton>
              <CartIcon />
              Adicionar ao carrinho
            </S.AddProductButton>
          </S.Info>
        </S.Wrapper>
      )}
    </S.Container>
  )
}

export default ProductInfo
