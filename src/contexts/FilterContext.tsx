import React, { ReactNode, createContext, useState, useContext } from 'react'
import { Filter, Option } from '../types'

interface FilterContextType {
  filter: Filter | ''
  setFilter: React.Dispatch<React.SetStateAction<Filter | ''>>
  isSelected: (value: string) => boolean
  sortBy: Option | null
  setSortBy: React.Dispatch<React.SetStateAction<Option | null>>
}

export const FilterContext = createContext({} as FilterContextType)

interface FilterContextProviderProps {
  children: ReactNode
}

export const FilterContextProvider: React.FC<FilterContextProviderProps> = ({
  children,
}) => {
  const [filter, setFilter] = useState<Filter | ''>('')
  const [sortBy, setSortBy] = useState<Option | null>(null)
  const isSelected = (value: string) => {
    return filter === value
  }

  return (
    <FilterContext.Provider
      value={{ filter, setFilter, isSelected, setSortBy, sortBy }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext)

  return context
}
