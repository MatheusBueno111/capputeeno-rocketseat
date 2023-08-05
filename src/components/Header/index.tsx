import React from 'react'
import * as S from './styles'
import SearchBar from '../SearchBar'
import { CartIcon } from '../Icons/cartIcon'

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Logo>
        <img src="logo.svg" alt="Logo " />
      </S.Logo>

      <S.Wrapper>
        <SearchBar />
        <div className="cart">
          <CartIcon />
          <span>2</span>
        </div>
      </S.Wrapper>
    </S.Container>
  )
}

export default Header
