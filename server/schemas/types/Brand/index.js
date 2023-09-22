export default `
type Brand {
  _id: ID!
  title: String!
  slug: String!
  url: String
  description: String
  picture: Media
  products: [Product]
}
type Query {
  brand(_id: ID!): Brand!
  brands: [Brand]!
}

input CreateBrandInput {
  title: String!
  slug: String
  description: String
  url: String!
  picture: ID
}

input UpdateBrandInput {
  title: String
  description: String
  slug: String
  url: String
  picture: ID
}

type Mutation {
  createBrand(input: CreateBrandInput!): Brand!
  deleteBrand(_id: ID!): Brand!
  updateBrand(_id: ID!, input: UpdateBrandInput!): Brand!
}
`