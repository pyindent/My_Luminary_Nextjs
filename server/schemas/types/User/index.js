export default `
type User {
    _id: ID!
    email: String!
    family_name: String
    given_name: String
    nickname: String
    name: String
    picture: String
    locale: String
    password: String
    address: String
    phone_number: String
    email_verified: Boolean
}

input CreateUserInput {
    email: String!
    name: String!
    family_name: String
    given_name: String
    nickname: String
    picture: String
}

type Mutation {
    createUser(input: CreateUserInput!): String!
}
`