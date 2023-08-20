import React, { ButtonHTMLAttributes } from 'react'

import * as S from './styles'
import { ArrowDown } from '../../Icons/ArrowDown'

interface SelectTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder: string
}

const SelectTrigger: React.FC<SelectTriggerProps> = ({
  placeholder,
  ...rest
}) => {
  return (
    <S.Button {...rest}>
      <span>{placeholder}</span>
      <ArrowDown />
    </S.Button>
  )
}

export default SelectTrigger
