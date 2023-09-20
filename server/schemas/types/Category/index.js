export default `
type Category {
  _id: ID
  title: String!
  description: String
  parentId: ID
  picture: Media
  slug: String!
}

type Query {
  categories: [Category]!
}
`
