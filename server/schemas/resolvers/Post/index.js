import Post from "../../models/Post";
import Faq from "../Faq";

export default {
    Query: {
        post: async (_parent, _args, _context, _info) => {
            try {
                return await Post.findById(_args._id);
            } catch (e) {
                throw e;
            }
        },
        posts: async (_parent, _args, _context, _info) => {
            try {
                return await Post.find();
            } catch (e) {
                throw e;
            }
        }
    },
    Mutation: {
        createPost: async (_parent, _args, _context, _info) => {
            try {
                return await Post.create({..._args.input})
            } catch (e) {
                throw e;
            }
        },
        deletePost: async(_parent, _args, _context, _info) => {
            try {
                const result = await Post.findByIdAndDelete({_id:_args._id})
                return result
            } catch (e) {
                throw e;
            }
        }
    }
}