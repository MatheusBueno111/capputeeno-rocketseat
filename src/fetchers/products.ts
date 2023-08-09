import axios, { AxiosPromise } from 'axios'
import { ProductsFetchResponse } from '../types'

const API_URL = 'http://localhost:3333/' as string

export const fetchProducts = async (): AxiosPromise<ProductsFetchResponse> => {
  console.log('Fetching products')
  const response = await axios.post(API_URL, {
    query: `
       {
        allProducts {
          id
          name
          image_url
          price_in_cents
        }}
      `,
  })
  return response
}
