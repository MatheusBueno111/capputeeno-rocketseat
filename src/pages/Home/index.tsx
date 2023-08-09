import React, { useEffect } from 'react'
import * as S from './styles'
import FilterBar from './components/FilterBar'
import PaginationBar from '../../components/Pagination'
import { useProducts } from '../../hook/useProducts'

import ProductList from '../../components/ProductList'

const Home: React.FC = () => {
  const { products, isLoading } = useProducts()

  useEffect(() => {
    console.log('Componente Montado')
  }, [])

  return (
    <S.Container>
      <FilterBar />
      <PaginationBar />

      <ProductList products={products} isLoading={isLoading} />
    </S.Container>
  )
}

export default Home
