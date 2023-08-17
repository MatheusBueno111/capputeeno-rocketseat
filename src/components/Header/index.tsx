import React from 'react'
import * as S from './styles'
import SearchBar from '../SearchBar'
import { CartIcon } from '../Icons/CartIcon'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Logo>
        <img src="logo.svg" alt="Logo " />
      </S.Logo>

      <S.Wrapper>
        <SearchBar />
        <div className="cart">
          <Link to="/checkout">
            <CartIcon />
            <span>2</span>
          </Link>
        </div>
      </S.Wrapper>
    </S.Container>
  )
}

export default Header
