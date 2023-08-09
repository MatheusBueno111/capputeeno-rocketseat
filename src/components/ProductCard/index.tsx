import React from 'react'

import * as S from './styles'
import { Product } from '../../types'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <S.Container>
      <img src={product.image_url} alt="cappuccino" />
      <S.Wrapper>
        <p className="product-description">{product.name}</p>
        <S.Divider />
        <span className="product-price">{product.price_in_cents}</span>
      </S.Wrapper>
    </S.Container>
  )
}

export default ProductCard
