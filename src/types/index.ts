export interface Option {
  option: string
  sortField: string
  sortOrder: string
}

export interface Product {
  id: string
  name: string
  image_url: string
  price_in_cents: number
  category: string
}

export interface FetchProductsResponse {
  allProducts: Product[]
}

export type Filter = 't-shirts' | 'mugs'
