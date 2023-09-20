import { mergeResolvers } from "@graphql-tools/merge";

import Product from "./Product";
import Category from "./Category";

const resolvers = [Product, Category]

export default mergeResolvers(resolvers)