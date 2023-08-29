import React from 'react'
import * as S from './styles'

interface SelectContentProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any[]
  onSelect: (selectedOption: any) => void
}

const SelectContent: React.FC<SelectContentProps> = ({ options, onSelect }) => {
  return (
    <>
      {options?.map((option) => (
        <S.OptionItem key={option.option} onClick={() => onSelect(option)}>
          {option.option}
        </S.OptionItem>
      ))}
    </>
  )
}

export default SelectContent
