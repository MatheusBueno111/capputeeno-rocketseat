import React, { ReactNode } from 'react'
import * as S from './styles'

interface SelectRootProps {
  children: ReactNode
  width?: string
  padding?: string
  $border?: boolean
}

const SelectRoot: React.FC<SelectRootProps> = ({
  children,
  width,
  padding,
  $border,
}) => {
  return (
    <S.Container width={width} padding={padding} $border={$border}>
      {children}
    </S.Container>
  )
}

export default SelectRoot
