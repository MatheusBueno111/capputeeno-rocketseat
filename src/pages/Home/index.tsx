import React from 'react'

import * as S from './styles'
import FilterBar from './components/FilterBar'
import PaginationBar from '../../components/Pagination'

const Home: React.FC = () => {
  return (
    <S.Container>
      <FilterBar />
      <PaginationBar />
    </S.Container>
  )
}

export default Home
