import { gql } from 'graphql-request'
import client from '../graphql/client'
import { FetchProductsResponse, Filter, Option } from '../types'
import { GET_PRODUCTS } from '../graphql/queries/getProducts'

export const fetchProducts = async (
  filter: Filter | '',
  sortBy: Option | null,
) => {
  try {
    const formattedFilter = filter === '' ? undefined : { category: filter }
    const variables = {
      filter: formattedFilter,
      sortField: sortBy?.sortField || '',
      sortOrder: sortBy?.sortOrder || '',
    }

    const query = gql`
      ${GET_PRODUCTS}
    `

    const response = await client.request<FetchProductsResponse>(
      query,
      variables,
    )

    return response
  } catch (error) {
    console.error('Error fetching products:', error)
    throw new Error('Error fetching products')
  }
}
