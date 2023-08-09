import { useQuery } from 'react-query'
import { fetchProducts } from '../fetchers/products'

export function useProducts() {
  const { data: response, isLoading } = useQuery({
    queryFn: fetchProducts,
    queryKey: ['products'],
    refetchOnWindowFocus: false,
  })
  const products = response?.data?.data?.allProducts
  return { products, isLoading }
}
