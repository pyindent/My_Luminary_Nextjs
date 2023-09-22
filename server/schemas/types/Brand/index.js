export default `
type Brand {
  title: String!
  slug: String!
  url: String
  picture: Media
  products: [Product]
}
type Query {
  brands: [Brand]!
}
`