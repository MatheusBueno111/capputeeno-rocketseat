import React, { useState } from 'react'
import * as S from './styles'
import { ArrowDown } from '../../../../components/Icons/ArrowDown'
import { Option } from '../../../../types'
import { useStore } from '../../../../contexts/StoreContext'

const SortBySelect: React.FC = () => {
  const { sortBy, setSortBy } = useStore()
  const [isOpen, setIsOpen] = useState(false)

  const handleSelect = (option: Option) => {
    setSortBy(option)
    setIsOpen(false)
  }

  const options: Option[] = [
    { option: 'Novidades', sortField: 'created_at', sortOrder: 'DSC' },
    {
      option: 'Preço: Maior - menor',
      sortField: 'price_in_cents',
      sortOrder: 'DSC',
    },
    {
      option: 'Preço: Menor - maior',
      sortField: 'price_in_cents',
      sortOrder: 'ASC',
    },
    { option: 'Mais vendidos', sortField: 'sales', sortOrder: 'DSC' },
  ]

  return (
    <S.Container>
      <S.Button onClick={() => setIsOpen((value) => !value)}>
        <span>{sortBy?.option || 'Organizar por'}</span>
        <ArrowDown />
      </S.Button>
      {isOpen ? (
        <S.OptionsContainer>
          {options.map((option) => (
            <S.OptionItem
              key={option.option}
              onClick={() => handleSelect(option)}
            >
              {option.option}
            </S.OptionItem>
          ))}
        </S.OptionsContainer>
      ) : null}
    </S.Container>
  )
}

export default SortBySelect
