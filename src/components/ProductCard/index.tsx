import React from 'react'

import * as S from './styles'
import { Product } from '../../types'
import { centavosParaReais } from '../../utils/formattedPrice'
import { useNavigate } from 'react-router-dom'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate()
  const handleOpenProductInfo = () => {
    navigate(`/${product.id}`)
  }

  return (
    <S.Container onClick={handleOpenProductInfo} id="ola">
      <img src={product.image_url} alt={product.name} />
      <S.Wrapper>
        <p className="product-description">{product.name}</p>
        <S.Divider />
        <span className="product-price">
          R$ {centavosParaReais(`${product.price_in_cents}`)}
        </span>
      </S.Wrapper>
    </S.Container>
  )
}

export default ProductCard
