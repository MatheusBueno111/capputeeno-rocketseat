import { useQuery } from 'react-query'
import { fetchProducts } from '../fetchers/products'

export function useProducts() {
  const { data: products, isLoading } = useQuery({
    queryFn: fetchProducts,
    queryKey: ['products'],
    refetchOnWindowFocus: false,
  })
  return { products, isLoading }
}
