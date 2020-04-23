// This is how we tell GraphQL where it should be looking for information.

const admin = require("firebase-admin");

const resolvers = {
  // User: {
  //   async users(user) {
  //     try {
  //       const users = await admin
  //         .firestore()
  //         .collection('users')
  //         .get();
  //       return users.docs.map(user => user.data());
  //     }
  //     catch (error) {
  //       throw new ApolloError(error);
  //     }
  //   }
  // },

  Query: {
    async users() {
      const users = await admin
        .firestore()
        .collection('users')
        .get();
      return users.docs.map(user => user.data());
    }
  }
}

module.exports = resolvers;