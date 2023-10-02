export default `
type User {
    _id: ID!
    email: String!
    family_name: String
    given_name: String
    nickname: String
    name: String
    role: String
    picture: String
    locale: String
    password: String
    address: String
    phone_number: String
    email_verified: Boolean
    created_at: String
    updated_at: String
}

type Query {
    user(_id: ID!): User!
    users: [User]!
}

input CreateUserInput {
    email: String!
    name: String!
    family_name: String
    given_name: String
    nickname: String
    picture: String
}

input UpdateUserInput {
    name: String!
    family_name: String
    given_name: String
    nickname: String
    picture: String
    role: String
}

type Mutation {
    createUser(input: CreateUserInput!): String!
    deleteUser(_id: ID!): String!
}
`