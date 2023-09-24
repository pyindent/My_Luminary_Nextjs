export default `
type Product {
  _id: ID
  name: String
  slug: String
  long_description: String
  short_description: String
  ratings: Float
  reviews: Int
  pictures: [Media]
  brands: [Brand]
  category: Category
  variants: [Variant]
}

type Products {
  products: [Product!]
  totalProducts: Int
}

input ProductsFilters {
  name: String
  category: ID
}

input SearchProductsInput {
  filter: ProductsFilters!
  limit: Int
  skip: Int
}

type Query {
  products(input: SearchProductsInput!): Products!
  product(_id: ID!): Product!
}
`
