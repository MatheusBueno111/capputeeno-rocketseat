import React, { useState } from 'react'
import * as S from './styles'
import { ArrowDown } from '../../../../components/Icons/ArrowDown'
import { Option } from '../../../../types'

interface SelectProps {
  options: Option[]
  onChange: (option: Option) => void
}

const Select: React.FC<SelectProps> = ({ options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)

  const handleSelect = (option: Option) => {
    setSelectedOption(option)
    setIsOpen(false)
    onChange(option)
  }

  // useEffect(() => {
  //   console.log('selectedOption', selectedOption)
  // }, [selectedOption])

  return (
    <S.Container>
      <S.Button onClick={() => setIsOpen((value) => !value)}>
        <span>{selectedOption?.option || 'Organizar por'}</span>
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

export default Select
