import { mergeResolvers } from "@graphql-tools/merge";

import Product from "./Product";
import Category from "./Category";
import Brand from "./Brand";

const resolvers = [Product, Category, Brand]

export default mergeResolvers(resolvers)