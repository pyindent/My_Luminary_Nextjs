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

type Medias {
  medias: [Media!]
  totalMedias: Int
}

input MediaPaginationInput {
  limit: Int
  skip: Int
}

type Query {
  medias(input: MediaPaginationInput!): Medias!
  media(_id: ID!): Media
}

type Mutation {
  createMedia(input: CreateMediaInput!): Media!
  deleteMedia(_id: ID!): Media!
}
`