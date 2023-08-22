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
  sales: string
  created_at: string
  description: string
}

export interface FetchProductsResponse {
  allProducts: Product[]
  _allProductsMeta: {
    count: number
  }
}

export interface FetchProductResponse {
  Product: Product
}

export type Filter = 't-shirts' | 'mugs'
