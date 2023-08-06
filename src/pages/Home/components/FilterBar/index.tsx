import React from 'react'
import * as S from './styles'
import Select from '../Select'
import { Option } from '../../../../types'

const FilterBar: React.FC = () => {
  const options: Option[] = [
    { option: 'Novidades' },
    { option: 'Preço: Maior - menor' },
    { option: 'Preço: Menor - maior' },
    { option: 'Mais vendidos' },
  ]
  const handleSelectChange = (selectedOption: Option) => {
    console.log(`Selected option: ${selectedOption.option}`)
    // Adicione aqui a lógica para tratar a seleção da opção.
  }

  return (
    <S.Container>
      <S.WrapperFilters>
        <S.Filter>TODOS OS PRODUTOS</S.Filter>
        <S.Filter>CAMISETAS</S.Filter>
        <S.Filter>CANECAS</S.Filter>
      </S.WrapperFilters>
      <Select options={options} onChange={handleSelectChange} />
    </S.Container>
  )
}

export default FilterBar
