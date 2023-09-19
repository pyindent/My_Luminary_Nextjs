export default `
type Category {
  title: String!
  description: String!
  parentId: ID
  picture: Media
  slug: String!
}

type Query {
  categories: [Category]!
}
`
