export default `
type Media {
  _id: ID!
  bucket: String!
  key: String!
}

input CreateMediaInput {
  bucket: String!
  key: String!
}

type Mutation {
  createMedia(input: CreateMediaInput!): Media
}
`