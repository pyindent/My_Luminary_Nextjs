export default `
type Tag {
  name: String!
  slug: String!
}

type Query {
  tags: [Tag]!
}
`