export default `
  type Product {
    _id: ID!
    title: String!
  }

  type Query {
    products: [Product]!
  }
`
