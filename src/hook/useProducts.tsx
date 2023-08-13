import { useQuery } from 'react-query'
import { useFilter } from '../contexts/FilterContext'
import { fetchProducts } from '../fetchers/products'

export function useProducts() {
  const { filter } = useFilter()
  const isSelected = (value: string) => {
    return filter === value
  }

  const { data, isLoading } = useQuery({
    queryFn: () => fetchProducts(filter),
    queryKey: ['products', filter],
  })
  const products = data?.allProducts
  return { products, isLoading, isSelected }
}
