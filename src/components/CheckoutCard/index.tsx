import React, { useState } from 'react'
import * as S from './styles'
import { Select } from '../Select'
import { Trash } from '../Icons/Trash'
import { Product } from '../../types'
import { centavosParaReais } from '../../utils/formattedPrice'
import { useAppDispatch } from '../../redux/hooks'
import { removeFromCart, updateCart } from '../../redux/cartSlice'
import { ArrowDown } from '../Icons/ArrowDown'
import SelectDropdown from '../Select/SelectDropdown'

interface CheckoutCardProps {
  product: Product
}

const CheckoutCard: React.FC<CheckoutCardProps> = ({ product }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const options = Array.from({ length: 10 }, (_, index) => ({
    option: index + 1,
  }))

  const dispatch = useAppDispatch()

  const handleDelete = (id: string) => {
    dispatch(removeFromCart(id))
  }

  const handleOptionSelect = (selectedOption: any) => {
    const newCounter = selectedOption.option
    dispatch(updateCart({ id: product.id, amount: newCounter }))
    setIsDropdownOpen(false)
  }

  return (
    <S.Container>
      <img src={product.image_url} alt="" />
      <S.ProductInfo>
        <S.Title>
          <p>{product.name}</p>
          <div onClick={() => handleDelete(product.id)}>
            <Trash />
          </div>
        </S.Title>
        <p className="product-description">{product.description}</p>
        <S.Wrapper>
          <Select.Root
            width="6.5rem"
            padding="0.8rem 0.4rem 0.8rem 1.2rem"
            $border
          >
            <Select.Trigger onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <Select.Value
                placeholder={product.counter! > 0 ? product.counter! : 1}
              />
              <Select.Icon icon={ArrowDown} />
            </Select.Trigger>
            <SelectDropdown $show={isDropdownOpen}>
              <Select.Content options={options} onSelect={handleOptionSelect} />
            </SelectDropdown>
          </Select.Root>
          <p className="product-price">
            R$ {centavosParaReais(`${product.price_in_cents}`)}
          </p>
        </S.Wrapper>
      </S.ProductInfo>
    </S.Container>
  )
}

export default CheckoutCard
