import React from 'react'
import * as S from './styles'
import SelectFilter from '../SelectFilter'
import { Option } from '../../../../types'
import { useProducts } from '../../../../hook/useProducts'
import { useFilter } from '../../../../contexts/FilterContext'

const FilterByType: React.FC = () => {
  const { isSelected } = useProducts()
  const { setFilter } = useFilter()
  const options: Option[] = [
    { option: 'Novidades' },
    { option: 'Preço: Maior - menor' },
    { option: 'Preço: Menor - maior' },
    { option: 'Mais vendidos' },
  ]
  const handleSelectChange = (selectedOption: Option) => {
    console.log(`Selected option: ${selectedOption.option}`)
  }

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
      <SelectFilter options={options} onChange={handleSelectChange} />
    </S.Container>
  )
}

export default FilterByType
