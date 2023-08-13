import { useEffect, useState } from 'react'
import { Filter } from '../types'

export function useFilter() {
  const [filter, setFilter] = useState<Filter | ''>('mugs')
  useEffect(() => {
    console.log('FILTERHOOK', filter)
  }, [filter])
  const isSelected = (value: string) => {
    return filter === value
  }
  return { filter, setFilter, isSelected }
}
