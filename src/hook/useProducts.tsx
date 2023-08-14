import { useQuery } from 'react-query'
import { useFilter } from '../contexts/FilterContext'
import { fetchProducts } from '../fetchers/products'

export function useProducts() {
  const { filter, sortBy } = useFilter()

  const { data, isLoading } = useQuery({
    queryFn: () => fetchProducts(filter, sortBy),
    queryKey: ['products', filter, sortBy],
    staleTime: 60 * 1000, // 1 minute
  })
  const products = data?.allProducts
  return { products, isLoading }
}
