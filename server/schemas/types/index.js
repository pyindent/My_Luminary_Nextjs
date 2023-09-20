import { mergeTypeDefs } from "@graphql-tools/merge"

import Product from "./Product"
import Category from "./Category"
import Brand from "./Brand"
import Media from "./Media"
import Tag from "./Tag"
import Variant from "./Variant"

const typeDefs = [
    Product,
    Category,
    Brand,
    Media,
    Tag,
    Variant
]

export default mergeTypeDefs(typeDefs)