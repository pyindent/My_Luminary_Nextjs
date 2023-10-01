import User from "../../models/User";
export default {
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