import Brand from '~/server/schemas/models/Brand'

export default {
    Query: {
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
        }
    }
}