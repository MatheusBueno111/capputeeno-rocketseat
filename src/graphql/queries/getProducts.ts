export const GET_ALL_PRODUCTS = `
  query {
    allProducts {
      id
      name
      image_url
      price_in_cents
      category
    }
  }
`
