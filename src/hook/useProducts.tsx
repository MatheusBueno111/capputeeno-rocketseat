import { useQuery } from 'react-query'
import { fetchProducts } from '../fetchers/products'
import { useStore } from '../contexts/StoreContext'

export function useProducts() {
  const { filter, sortBy, itemsPerPage, currentPage } = useStore()
  const page = currentPage - 1

  const { data: products, isLoading } = useQuery({
    queryFn: () => fetchProducts(filter, sortBy, itemsPerPage, page),
    queryKey: ['products', filter, sortBy, itemsPerPage, page],
    staleTime: 60 * 1000, // 1 minute
  })

  return { products, isLoading }
}
