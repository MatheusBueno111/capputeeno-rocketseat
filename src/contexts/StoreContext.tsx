import React, { ReactNode, createContext, useState, useContext } from 'react'
import { Filter, Option } from '../types'

interface StoreContextType {
  filter: Filter | ''
  setFilter: React.Dispatch<React.SetStateAction<Filter | ''>>
  isSelected: (value: string) => boolean
  sortBy: Option | null
  setSortBy: React.Dispatch<React.SetStateAction<Option | null>>
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  itemsPerPage: number
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>
}

export const StoreContext = createContext({} as StoreContextType)

interface StoreContextProviderProps {
  children: ReactNode
}

export const StoreContextProvider: React.FC<StoreContextProviderProps> = ({
  children,
}) => {
  const [filter, setFilter] = useState<Filter | ''>('')
  const [sortBy, setSortBy] = useState<Option | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)

  const isSelected = (value: string) => {
    return filter === value
  }

  return (
    <StoreContext.Provider
      value={{
        filter,
        setFilter,
        isSelected,
        sortBy,
        setSortBy,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        setItemsPerPage,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = (): StoreContextType => {
  const context = useContext(StoreContext)

  return context
}
