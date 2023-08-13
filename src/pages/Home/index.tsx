import React from 'react'
import * as S from './styles'
import FilterByType from './components/FilterByType'
import PaginationBar from '../../components/Pagination'
import { useProducts } from '../../hook/useProducts'

import ProductList from '../../components/ProductList'

const Home: React.FC = () => {
  const { products, isLoading } = useProducts()

  return (
    <S.Container>
      <FilterByType />
      <PaginationBar />
      <ProductList products={products} isLoading={isLoading} />
    </S.Container>
  )
}

export default Home
