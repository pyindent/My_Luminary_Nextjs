import { mergeTypeDefs } from "@graphql-tools/merge"

import Product from "./Product"
const typeDefs = [
    Product
]

export default mergeTypeDefs(typeDefs)