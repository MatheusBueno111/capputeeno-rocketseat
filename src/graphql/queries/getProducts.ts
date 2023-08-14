export const GET_PRODUCTS = `
  query GetProductsByCategory(
    $filter: ProductFilter
    $sortField: String!
    $sortOrder: String!
  ) {
    allProducts(
      filter: $filter
      sortField: $sortField
      sortOrder: $sortOrder
    ) {
      id
      name
      image_url
      price_in_cents
      category
      sales
      created_at
    }
  }
`
