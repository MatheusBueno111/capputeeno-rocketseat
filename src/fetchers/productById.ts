import { gql } from 'graphql-request'
import client from '../graphql/client'
import { FetchProductResponse } from '../types'
import { GET_PRODUCT } from '../graphql/queries/getProductById'

export const fetchProductById = async (productId: string | undefined) => {
  try {
    const variables = {
      id: productId,
    }

    const query = gql`
      ${GET_PRODUCT}
    `

    const response = await client.request<FetchProductResponse>(
      query,
      variables,
    )
    return response.Product
  } catch (error) {
    console.error('Error fetching products:', error)
    throw new Error('Error fetching products')
  }
}
