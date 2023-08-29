import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import * as S from './styles'

interface SelectTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const SelectTrigger: React.FC<SelectTriggerProps> = ({ children, ...rest }) => {
  return <S.Button {...rest}>{children}</S.Button>
}

export default SelectTrigger
