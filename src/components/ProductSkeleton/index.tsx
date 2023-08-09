import React from 'react'

import * as S from './styles'
import LoadingStripe from '../LoadingStripe'

const ProductSkeleton: React.FC = () => {
  return (
    <S.Skeleton>
      <div className="skeleton-image" />
      <div className="skeleton-product-info">
        <LoadingStripe height="2.4rem" width="23.2rem" />
        <S.Divider />
        <LoadingStripe height="2.4rem" width="23.2rem" />
      </div>
    </S.Skeleton>
  )
}

export default ProductSkeleton
