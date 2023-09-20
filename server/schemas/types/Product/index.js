export default `
type Product {
  _id: ID
  name: String
  slug: ID
  short_description: String
  price: [Float]
  until: String
  sku: String
  stock: Int
  ratings: Float
  reviews: Int
  sale_count: Int
  is_top: Boolean
  is_new: Boolean
  is_featured: Boolean
  small_pictures: [Media]
  pictures: [Media]
  large_pictures: [Media]
  brands: [Brand]
  tags: [Tag]
  categories: [Category]
  content: String
  discount: Float
  variants: [Variant]
}

type Query {
  products: [Product]!
}
`
