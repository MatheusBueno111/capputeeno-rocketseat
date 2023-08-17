import React, { useEffect, useState } from 'react'
import * as S from './styles'
import FilterByType from './components/FilterByType'
import PaginationBar from '../../components/Pagination'
import { useProducts } from '../../hook/useProducts'

import ProductList from '../../components/ProductList'
import { useStore } from '../../contexts/StoreContext'

const Home: React.FC = () => {
  const { products, isLoading } = useProducts()
  const { itemsPerPage } = useStore()
  const [totalPages, setTotalPages] = useState(5)

  const handleTotalPages = () => {
    if (products) {
      const newTotalPages = Math.ceil(
        products._allProductsMeta.count / itemsPerPage,
      )

      setTotalPages(newTotalPages)
    }
  }

  useEffect(() => {
    handleTotalPages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products])

  return (
    <S.Container>
      <FilterByType />
      <PaginationBar totalPages={totalPages} />
      {products?.allProducts ? (
        <ProductList products={products?.allProducts} isLoading={isLoading} />
      ) : (
        <h1>Produtos nao encontrados</h1>
      )}
    </S.Container>
  )
}

export default Home
