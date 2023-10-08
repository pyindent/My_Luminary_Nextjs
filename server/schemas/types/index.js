import { mergeTypeDefs } from "@graphql-tools/merge"

import Product from "./Product"
import Category from "./Category"
import Brand from "./Brand"
import Media from "./Media"
import Tag from "./Tag"
import Variant from "./Variant"
import User from "./User"
import Faq from "./FAQ"

const typeDefs = [
    Product,
    Category,
    Brand,
    Media,
    Tag,
    Variant,
    User,
    Faq
]

export default mergeTypeDefs(typeDefs)