import React, { ReactNode, createContext, useState, useContext } from 'react'
import { Filter, Option } from '../types'

interface StoreContextType {
  filter: Filter | ''
  setFilter: React.Dispatch<React.SetStateAction<Filter | ''>>
  isSelected: (value: string) => boolean
  sortBy: Option | null
  setSortBy: React.Dispatch<React.SetStateAction<Option | null>>
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
  const isSelected = (value: string) => {
    return filter === value
  }

  return (
    <StoreContext.Provider
      value={{ filter, setFilter, isSelected, setSortBy, sortBy }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = (): StoreContextType => {
  const context = useContext(StoreContext)

  return context
}
