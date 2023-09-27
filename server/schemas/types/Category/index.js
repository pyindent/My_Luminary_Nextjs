export default `
type Category {
  _id: ID!
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
  category(_id: ID!): Category!
  categories: [Category]!
  sideCategories: [Category]!
}

input CreateCategoryInput {
  title: String!
  description: String
  parentId: ID
  pictureId: ID
  slug: String!
  status: Boolean
}

input UpdateCategoryInput {
  title: String
  description: String
  parent: ID
  picture: ID
  slug: String
  status: Boolean
}

type Mutation {
  createCategory(input: CreateCategoryInput!): Category!
  deleteCategory(_id: ID!): Category!
  updateCategory(_id: ID!, input: UpdateCategoryInput!): Category!
}
`
