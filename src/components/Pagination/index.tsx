import React from 'react'
import * as S from './styles'
import { ArrowLeft } from '../Icons/ArrowLeft'
import { ArrowRight } from '../Icons/ArrowRight'
import { useStore } from '../../contexts/StoreContext'

interface PaginationBarProps {
  totalPages: number
}

const PaginationBar: React.FC<PaginationBarProps> = ({ totalPages }) => {
  const { currentPage, setCurrentPage } = useStore()
  const generateButtonPages = () => {
    const visibleButtonPages = totalPages < 5 ? totalPages : 5
    const pages = Array.from({ length: visibleButtonPages }, (_, index) => {
      const pageNumber = index + 1
      const isSelected = pageNumber === currentPage
      return (
        <S.PaginationButton
          key={index}
          onClick={() => setCurrentPage(pageNumber)}
          $isSelected={isSelected}
        >
          {pageNumber}
        </S.PaginationButton>
      )
    })
    return pages
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <S.Container>
      {generateButtonPages()}
      <S.PaginationButton onClick={handlePreviousPage}>
        <ArrowLeft />
      </S.PaginationButton>
      <S.PaginationButton onClick={handleNextPage}>
        <ArrowRight />
      </S.PaginationButton>
    </S.Container>
  )
}

export default PaginationBar
