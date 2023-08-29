import React, { ElementType } from 'react'

import * as S from './styles'

interface SelectIconProps {
  icon: ElementType
}

const SelectIcon: React.FC<SelectIconProps> = ({ icon: Icon }) => {
  return (
    <S.Container>
      <Icon />
    </S.Container>
  )
}

export default SelectIcon
