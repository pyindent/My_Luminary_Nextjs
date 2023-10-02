import User from "../../models/User";
export default {
    Query: {
        user: async (_parent, _args, _context, _info) => {
            try {
                return await User.findById(_args._id)
            } catch (e) {
                throw e;
            }
        },
        users: async (_parent, _args, _context, _info) => {
            try {
                return await User.find()
            } catch (e) {
                throw e;
            }
        }
    },
    Mutation: {
        createUser: async (_parent, _args, _context, _info) => {
            try{
                // Check if a category with the same title already exists
                const user = await User.findOne({ email: _args.input.email });
                if(user){
                    return "User Already Exist."
                }
                const result = await User.create({..._args.input})
                return "Successfully Registered."
            }
            catch (e) {
                throw new Error("Failed to Create User.");
            }
        }
    }
}