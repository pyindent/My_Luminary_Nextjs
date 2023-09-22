export default `
type Product {
  _id: ID
  name: String
  slug: ID
  long_description: String
  short_description: String
  price: [Float]
  until: String
  sku: String
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
