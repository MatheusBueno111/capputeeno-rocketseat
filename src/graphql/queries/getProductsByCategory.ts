export const GET_PRODUCTS_BY_CATEGORY = `
  query GetProductsByCategory($category: String!) {
    allProducts(filter: { category: $category }) {
      id
      name
      image_url
      price_in_cents
      category
    }
  }
`
