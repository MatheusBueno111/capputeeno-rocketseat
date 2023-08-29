import React, { ReactNode } from 'react'
import * as S from './styles'

interface SelectDropdownProps {
  children: ReactNode
  $show?: boolean
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  children,
  $show = false,
  ...props
}) => {
  return (
    <S.Container $show={$show} {...props}>
      {children}
    </S.Container>
  )
}

export default SelectDropdown
