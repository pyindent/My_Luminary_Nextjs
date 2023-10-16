import Post from "../../models/Post";
import User from "../../models/User";
import Media from "../../models/Media";

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
    Post : {
        author: async (_parent, _args, _context, _info) => {
            try {
                const _id = _parent.author
                return await User.findById(_id)
            } catch (e) {
                throw new Error ("Failed to get author.")
            }
        },
        main_image: async (_parent, _args, _context, _info) => {
            try {
                const _id = _parent.main_image
                return await Media.findById(_id)
            } catch (e) {
                throw new Error ("Failed to get main image.")
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