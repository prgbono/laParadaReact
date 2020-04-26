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
    },

    async productos() {
      const productos = await admin
        .firestore()
        .collection('productos')
        .get();
      return productos.docs.map(producto => producto.data());
    },

    async categorias() {
      const categorias = await admin
        .firestore()
        .collection('categorias')
        .get();
      return categorias.docs.map(categoria => categoria.data());
    },

    async especialidades() {
      const especialidades = await admin
        .firestore()
        .collection('especialidades')
        .get();
      return especialidades.docs.map(especialidad => especialidad.data());
    }
  },

  Mutation: {
    crearCategoria: async (parent, args, context, info) => {
      const CategoriaCreada = await admin
        .firestore()
        .collection('categorias')
        .doc()
        .set(args);
      // return CategoriaCreada;
    },

    crearEspecialidad: async (parent, args, context, info) => {
      const EspecialidadCreada = await admin
        .firestore()
        .collection('especialidades')
        .doc()
        .set(args);
      console.log('resolver done');
      // return EspecialidadCreada;
    }
  }
}

module.exports = resolvers;