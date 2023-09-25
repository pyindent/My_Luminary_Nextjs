import { mergeResolvers } from "@graphql-tools/merge";

import Product from "./Product";
import Category from "./Category";
import Brand from "./Brand";
import Media from "./Media";

const resolvers = [Product, Category, Brand, Media]

export default mergeResolvers(resolvers)