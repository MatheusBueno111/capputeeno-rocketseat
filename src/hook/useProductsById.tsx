import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../fetchers/productById'

export function useProductsById() {
  const { id } = useParams<{ id: string }>()

  const { data: product, isLoading } = useQuery({
    queryFn: () => fetchProductById(id),
    queryKey: ['product', id],
    staleTime: 60 * 1000, // 1 minute
  })

  return { product, isLoading }
}
