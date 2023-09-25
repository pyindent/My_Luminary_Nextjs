import Brand from '~/server/schemas/models/Brand'
import Media from '../../models/Media';

export default {
    Query: {
        brand: async (_parent, _args, _context, _info) => {
            try {
              return await Brand.findById(_args._id)
            } catch (e) {
              throw e;
            }
        },
        brands: async (_parent, _args, _context, _info) => {
            try {
                return await Brand.find()
            } catch (e) {
                throw e;
            }
        }
    },
    Brand: {
        products: async (parent, _args, _context, _info) => {
            return null;
        },
        picture: async (parent, _args, _context, _info) => {
            if(parent.picture){
                const media = await Media.findById({_id: parent.picture})
                return media;
            }
            return null;
        }
    },
    Mutation: {
        createBrand: async(_parent, _args, _context, _info) => {
            const newBrand = await Brand.create({
                ..._args.input
            })
            return newBrand
        },
        updateBrand: async(_parent, _args, _context, _info) => {
            const updatedBrand = await Brand.findByIdAndUpdate({_id:_args._id}, {$set:{..._args.input}})
            return updatedBrand
        },
        deleteBrand: async(_parent, _args, _context, _info) => {
            return await Brand.findByIdAndDelete({_id:_args._id})
        }
    }
}