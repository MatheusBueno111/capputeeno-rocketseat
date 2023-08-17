import React from 'react'
import * as S from './styles'

import SortBySelect from '../SelectFilter'
import { useStore } from '../../../../contexts/StoreContext'
import { Filter } from '../../../../types'

const FilterByType: React.FC = () => {
  const { setFilter, isSelected, setCurrentPage } = useStore()

  const handleNewFilter = (value: Filter | '') => {
    setFilter(value)
    setCurrentPage(1)
  }

  return (
    <S.Container>
      <S.WrapperFilters>
        <S.Filter selected={isSelected('')} onClick={() => handleNewFilter('')}>
          TODOS OS PRODUTOS
        </S.Filter>
        <S.Filter
          selected={isSelected('t-shirts')}
          onClick={() => handleNewFilter('t-shirts')}
        >
          CAMISETAS
        </S.Filter>
        <S.Filter
          selected={isSelected('mugs')}
          onClick={() => handleNewFilter('mugs')}
        >
          CANECAS
        </S.Filter>
      </S.WrapperFilters>
      <SortBySelect />
    </S.Container>
  )
}

export default FilterByType
