import { mergeResolvers } from "@graphql-tools/merge";

import Product from "./Product";
import Category from "./Category";
import Brand from "./Brand";
import Media from "./Media";
import Variant from "./Variant"

const resolvers = [Product, Category, Brand, Media, Variant]

export default mergeResolvers(resolvers)