const User = require('./model/authorModel');
const resolvers = {
  Query: {
    getUser: async (_, { id }) => {
      return await User.findById(id);
    },
    getUsers: async () => {
      return await User.find();
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const { name, email, password } = input;
      if (!name || !email || !password) {
        throw new Error("Please enter all the fields");
      }

      try {
        const newUser = new User({ name, email, password });
        return await newUser.save();
      } catch (err) {
        throw new Error(`Error Creating User: ${err}`);
      }
    },
    changePassword: async (_, { id, password }) => {
      try {
        const user = await User.findByIdAndUpdate(
          id,
          { password },
          { new: true }
        );

        if (!user) {
          throw new Error("User not found");
        }

        return user;
      } catch (err) {
        throw new Error(`Error Occurred: ${err}`);
      }
    },
  },
};

module.exports = resolvers;
