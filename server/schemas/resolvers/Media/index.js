import Media from "../../models/Media";

export default {
    Mutation: {
        createMedia: async(_parent, _args, _context, _info) => {
            const newMedia = await Media.create({..._args.input});
            return newMedia
        }
    }
}