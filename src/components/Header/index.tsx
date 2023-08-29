import React, { ComponentProps } from 'react'
import * as S from './styles'
import SearchBar from '../SearchBar'
import { CartIcon } from '../Icons/CartIcon'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../redux/hooks'
import { useCart } from '../../redux/cartSlice'

type HeaderProps = ComponentProps<'header'>

const Header: React.FC<HeaderProps> = ({ ...rest }) => {
  const cart = useAppSelector(useCart)
  return (
    <S.Container {...rest}>
      <S.Logo>
        <Link to="/">
          <img src="logo.svg" alt="Logo " />
        </Link>
      </S.Logo>

      <S.Wrapper>
        <SearchBar type="text" placeholder="Procurando por algo específico?" />
        <div className="cart">
          <Link to="/checkout">
            <CartIcon />
            <span>{cart.length}</span>
          </Link>
        </div>
      </S.Wrapper>
    </S.Container>
  )
}

export default Header
