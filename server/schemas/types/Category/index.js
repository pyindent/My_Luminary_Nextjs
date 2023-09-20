export default `
type Category {
  _id: ID
  title: String
  description: String
  parent: Category
  picture: Media
  slug: String
  children: [Category]
}

type Query {
  categories: [Category]!
}
`
