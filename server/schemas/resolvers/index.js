import { mergeResolvers } from "@graphql-tools/merge";

import Product from "./Product";
import Category from "./Category";
import Brand from "./Brand";
import Media from "./Media";
import Variant from "./Variant"
import User from "./User";
import Faq from "./Faq";

const resolvers = [
    Product,
    Category,
    Brand,
    Media,
    Variant,
    User,
    Faq
];

export default mergeResolvers(resolvers)