import React from 'react'
import * as S from './styles'
import { SearchIcon } from '../Icons/searchIcon'

const SearchBar: React.FC = () => {
  return (
    <S.Container>
      <input type="text" placeholder="Procurando por algo específico?" />
      <SearchIcon />
    </S.Container>
  )
}

export default SearchBar
