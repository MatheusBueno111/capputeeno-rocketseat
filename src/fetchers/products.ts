import { gql } from 'graphql-request'
import client from '../graphql/client'
import { GET_ALL_PRODUCTS } from '../graphql/queries/getProducts'
import { FetchProductsResponse, Filter } from '../types'
import { GET_PRODUCTS_BY_CATEGORY } from '../graphql/queries/getProductsByCategory'

export const fetchProducts = async (filter: Filter | '') => {
  const query =
    filter === ''
      ? gql`
          ${GET_ALL_PRODUCTS}
        `
      : gql`
          ${GET_PRODUCTS_BY_CATEGORY}
        `

  const variables = filter === '' ? undefined : { category: filter }

  const response = await client.request<FetchProductsResponse>(query, variables)

  return response
}

// const fetchProducts = await client.request<FetchProductsResponse>(
//   gql`
//     query {
//       allProducts(filter: { category: "${filter}" }) {
//         id
//         name
//         image_url
//         price_in_cents
//         category
//       }
//     }
//   `,
// )
