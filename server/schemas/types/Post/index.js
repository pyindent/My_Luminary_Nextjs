export default `
type Post {
    _id: ID!
    title: String!
    main_image: String
    content: String!
    author: User!
}

type Query {
    post(_id: ID!): Post!
    posts: [Post]!
}

input CreatePostInput {
    title: String!
    main_image: String
    content: String!
    author: ID!
}

type Mutation {
    createPost(input: CreatePostInput!): Post!
    deletePost(_id: ID!): Post!
}
`