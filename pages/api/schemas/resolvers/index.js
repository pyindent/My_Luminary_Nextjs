import { mergeResolvers } from "@graphql-tools/merge";

import Product from "./Product";

const resolvers = [Product]

export default mergeResolvers(resolvers)