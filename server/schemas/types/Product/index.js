export default `
type Product {
  _id: ID!
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
  category: String
}

input SearchProductsInput {
  filter: ProductsFilters!
  sortby: String
  limit: Int
  skip: Int
}

input CreateProductInput {
  name: String!
  slug: String!
  long_description: String
  short_description: String
  category: ID!
  brands: [ID]
  pictures: [ID]
}

input UpdateProductInput {
  name: String
  slug: String
  long_description: String
  short_description: String
  category: ID
  brands: [ID]
  pictures: [ID]
}

type Query {
  products(input: SearchProductsInput!): Products!
  product(_id: ID!): Product!
}


type Mutation {
  createProduct(input: CreateProductInput!): Product!
  updateProduct(_id: ID!, input: UpdateProductInput!): Product!
  deleteProduct(_id: ID!): String!
}
`
