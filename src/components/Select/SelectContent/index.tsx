import React from 'react'

import * as S from './styles'

interface SelectContentProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any[]
  isOpen: boolean
}

const SelectContent: React.FC<SelectContentProps> = ({ isOpen, options }) => {
  const handleOptionClick = (option: any[]) => {
    console.log('option', option)
  }

  return (
    <>
      {isOpen ? (
        <S.Container>
          {options?.map((option) => (
            <S.OptionItem
              key={option.option}
              onClick={() => handleOptionClick(option)}
            >
              {option.option}
            </S.OptionItem>
          ))}
        </S.Container>
      ) : null}
    </>
  )
}

export default SelectContent
