import Media from "../../models/Media";

export default {
    Query: {
        media: async (_parent, _args, _context, _info) => {
            try{
                return await Media.findById(_args._id)
            } catch(e) {
                throw e;
            }
        },
        medias: async (_parent, _args, _context, _info) => {
            try {
                const { input } = _args;

                const limit = input.limit || 6;
                const skip = input.skip * limit || 0
    
                const [medias, totalMedias] = await Promise.all([
                    Media.find().skip(skip).limit(limit).lean(),
                    Media.countDocuments()
                ]);
    
                return {
                    medias,
                    totalMedias
                }
            } catch (e) {
                throw new Error('Failed to get Medias')
            }
        }
    },
    Mutation: {
        createMedia: async(_parent, _args, _context, _info) => {
            const newMedia = await Media.create({..._args.input});
            return newMedia
        },
        deleteMedia: async(_parent, _args, _context, _info) => {
            try {
                const result = await Media.findByIdAndDelete({_id:_args._id})
                return result
            } catch (e) {
                throw e;
            }
        }
    }
}