export default `
type Category {
  _id: ID
  title: String!
  description: String
  parentId: ID
  parent: Category
  pictureId: ID
  picture: Media
  slug: String!
  status: Boolean
  children: [Category]
}

type Query {
  categories: [Category]!
}

input CreateCategoryInput {
  title: String!
  description: String
  parentId: ID
  pictureId: ID
  slug: String!
  status: Boolean
}

type Mutation {
  createCategory(input: CreateCategoryInput!): Category!
}
`
