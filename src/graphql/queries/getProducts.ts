export const GET_PRODUCTS = `
  query GetProductsByCategory(
    $filter: ProductFilter
    $sortField: String!
    $sortOrder: String!
    $page: Int!
    $perPage: Int!
  ) {
    allProducts(
      filter: $filter
      sortField: $sortField
      sortOrder: $sortOrder
      page: $page
      perPage: $perPage
    ) {
      id
      name
      image_url
      price_in_cents
      category
      sales
      created_at
    }
    _allProductsMeta (
      filter: $filter
    )
    {
      count
    }
  }
`
