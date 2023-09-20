export default `
type Brand {
  name: String!
  slug: String!
  icon: Media
}
type Query {
  brands: [Brand]!
}
`