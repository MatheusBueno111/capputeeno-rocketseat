import React, { useEffect } from 'react'
import * as S from './styles'
import FilterBar from './components/FilterBar'
import PaginationBar from '../../components/Pagination'
import { useProducts } from '../../hook/useProducts'

const Home: React.FC = () => {
  const { products, isLoading } = useProducts()

  useEffect(() => {
    console.log('Componente Montado')
  }, [])
  console.log('products', products)

  return (
    <S.Container>
      {isLoading ? (
        <div>loading....</div>
      ) : (
        <>
          <FilterBar />
          <PaginationBar />
        </>
      )}
    </S.Container>
  )
}

export default Home
