export const GET_PRODUCT = `
  query GetProductById(
    $id: ID!
  ) {
    Product(
      id: $id
    ) {
      id
      name
      image_url
      price_in_cents
      category
      sales
      created_at
      description
    }
  }
`
