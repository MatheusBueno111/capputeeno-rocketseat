import { useQuery } from 'react-query'
import { fetchProducts } from '../fetchers/products'
import { useStore } from '../contexts/StoreContext'

export function useProducts() {
  const { filter, sortBy } = useStore()

  const { data, isLoading } = useQuery({
    queryFn: () => fetchProducts(filter, sortBy),
    queryKey: ['products', filter, sortBy],
    staleTime: 60 * 1000, // 1 minute
  })
  const products = data?.allProducts
  return { products, isLoading }
}
