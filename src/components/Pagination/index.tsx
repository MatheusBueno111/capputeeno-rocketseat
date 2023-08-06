import React from 'react'
import * as S from './styles'
import { ArrowLeft } from '../Icons/ArrowLeft'
import { ArrowRight } from '../Icons/ArrowRight'

const PaginationBar: React.FC = () => {
  const generatePages = () => {
    const options = Array.from({ length: 5 }, (_, index) => (
      <S.PaginationButton key={index}>{index + 1}</S.PaginationButton>
    ))
    return options
  }

  return (
    <S.Container>
      {generatePages()}
      <S.PaginationButton>
        <ArrowLeft />
      </S.PaginationButton>
      <S.PaginationButton>
        <ArrowRight />
      </S.PaginationButton>
    </S.Container>
  )
}

export default PaginationBar
