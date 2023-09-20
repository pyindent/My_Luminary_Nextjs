export default `
type Category {
  _id: ID
  title: String
  description: String
  parent: Category
  picture: Media
  slug: String
  status: Boolean
  children: [Category]
}

type Query {
  categories: [Category]!
}
`
