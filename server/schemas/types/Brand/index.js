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
  brands: [Brand]!
}
`