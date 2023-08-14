import React from 'react'
import * as S from './styles'

import { useFilter } from '../../../../contexts/FilterContext'
import SortBySelect from '../SelectFilter'

const FilterByType: React.FC = () => {
  const { setFilter, isSelected } = useFilter()

  return (
    <S.Container>
      <S.WrapperFilters>
        <S.Filter selected={isSelected('')} onClick={() => setFilter('')}>
          TODOS OS PRODUTOS
        </S.Filter>
        <S.Filter
          selected={isSelected('t-shirts')}
          onClick={() => setFilter('t-shirts')}
        >
          CAMISETAS
        </S.Filter>
        <S.Filter
          selected={isSelected('mugs')}
          onClick={() => setFilter('mugs')}
        >
          CANECAS
        </S.Filter>
      </S.WrapperFilters>
      <SortBySelect />
    </S.Container>
  )
}

export default FilterByType
