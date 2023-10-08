import Faq from "../../models/FAQ";

export default {
    Query: {
        faq: async (_parent, _args, _context, _info) => {
            try {
                return await Faq.findById(_args._id);
            } catch (e) {
                throw e;
            }
        },
        faqs: async (_parent, _args, _context, _info) => {
            try {
                return await Faq.find();
            } catch (e) {
                throw e;
            }
        }
    },
    Mutation: {
        createFaq: async (_parent, _args, _context, _info) => {
            try {
                return await Faq.create({..._args.input})
            } catch (e) {
                throw e;
            }
        },
        updateFaq: async(_parent, _args, _context, _info) => {
            try {
                return await Faq.findByIdAndUpdate({_id:_args._id}, {$set:{..._args.input}})
            } catch (e) {
                throw e;
            }
        },
        deleteFaq: async(_parent, _args, _context, _info) => {
            try {
                const result = await Faq.findByIdAndDelete({_id:_args._id})
                return result
            } catch (e) {
                throw e;
            }
        }
    }
}