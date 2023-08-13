import React, { ReactNode, createContext, useState, useContext } from 'react'
import { Filter } from '../types'

interface FilterContextType {
  filter: Filter | ''
  setFilter: React.Dispatch<React.SetStateAction<Filter | ''>>
}

export const FilterContext = createContext({} as FilterContextType)

interface FilterContextProviderProps {
  children: ReactNode
}

export const FilterContextProvider: React.FC<FilterContextProviderProps> = ({
  children,
}) => {
  const [filter, setFilter] = useState<Filter | ''>('')
  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext)

  return context
}
