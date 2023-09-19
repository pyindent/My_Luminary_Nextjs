import gql from 'graphql-tag'

export const typeDefs = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    phone: String
  }

  type Query {
    users: [User]!
  }
`
