import React from 'react'
import * as S from './styles'
import { Product } from '../../types'
import ProductCard from '../ProductCard'
import ProductSkeleton from '../ProductSkeleton'

interface ProductListProps {
  products?: Product[] // Assuming Product is the type for your products
  isLoading: boolean
}

const ProductList: React.FC<ProductListProps> = ({ products, isLoading }) => {
  const renderProducts = () => {
    return products!.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))
  }

  const renderLoadingSkeleton = () => {
    return Array.from({ length: 12 }).map((_, index) => (
      <ProductSkeleton key={index} />
    ))
  }

  return (
    <S.Container>
      {isLoading ? renderLoadingSkeleton() : renderProducts()}
    </S.Container>
  )
}

export default ProductList
