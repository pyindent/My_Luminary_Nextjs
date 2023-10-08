export default `
type Faq {
    _id: ID!
    question: String!
    answer: String!
    faq_type: String!
}
type Query {
    faq(_id: ID!): Faq!
    faqs: [Faq]!
}

input CreateFaqInput {
    question: String!
    answer: String!
    faq_type: String!
}

input UpdateFaqInput {
    question: String
    answer: String
    faq_type: String
}

type Mutation {
    createFaq(input: CreateFaqInput!): Faq!
    deleteFaq(_id: ID!): Faq!
    updateFaq(_id: ID!, input: UpdateFaqInput!): Faq!
}
`