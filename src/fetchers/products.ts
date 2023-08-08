import axios, { AxiosPromise } from 'axios'
import { ProductsFetchResponse } from '../types'

const ARI_URL = 'http://localhost:3333/' as string

export const fetchProducts = async (): AxiosPromise<ProductsFetchResponse> => {
  console.log('Fetching products')
  const response = await axios.post(ARI_URL, {
    query: `
       {
        allProducts {
          id
          name
          image_url
          price_in_cents
          sales
        }}
      `,
  })
  const products = response.data.data.allProducts
  console.log('Product', products)
  return products
}
