import React, { ComponentProps } from 'react'
import * as S from './styles'
import { SearchIcon } from '../Icons/SearchIcon'

type SearchBarProps = ComponentProps<'input'>

const SearchBar: React.FC<SearchBarProps> = ({ ...rest }) => {
  return (
    <S.Container>
      <input {...rest} />

      <SearchIcon />
    </S.Container>
  )
}

export default SearchBar
