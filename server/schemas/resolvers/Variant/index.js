import Variant from '../../models/Variant';
import Media from '../../models/Media';

export default {
  Query: {
    variant: async (_parent, _args, _context, _info) => {
      try {
        return await Variant.findById(_args._id)
      } catch (e) {
        throw e;
      }
    },
  },
  Variant: {
    picture: async (parent, _args, _context, _info) => {
      try{
        if (parent.picture){
          const media = await Media.findById({_id:parent.picture})
          return media
        }
        return null
      } catch (e) {
        throw e;
      }
    }
  },
  Mutation: {
    createVariant: async (_parent, _args, _context, _info) => {
      const newVariant = await Variant.create({..._args.input})
      return newVariant
    },
    updateVariant: async(_parent, _args, _context, _info) => {
        const updateVariant = await Variant.findByIdAndUpdate({_id:_args._id}, {$set: {..._args.input}})
        return updateVariant
    },
    deleteVariant: async (_parent, _args, _context, _info) => {
        return await Variant.findByIdAndDelete({_id:_args._id})
      }
  }
}