export default `
type Variant {
    _id: ID!
    color: String
    size: Float
    quantity: Float
    sku: String!
    price: Float!
    sale_price: Float!
    picture: Media
}

type Query {
    variant(_id: ID!): Variant
}

input CreateVariantInput {
    color: String
    size: Float
    quantity: Float
    sku: String!
    price: Float!
    sale_price: Float!
    picture: ID
    product: ID!
}

type Mutation {
    createVariant(input: CreateVariantInput!): Variant!
}
`