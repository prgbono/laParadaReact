// This is how we tell GraphQL where it should be looking for information.

const admin = require("firebase-admin");

const resolvers = {
/* Los resolvers es un objeto que tiene una propiedad igual al nombre de la Query, 
   esta función se ejecutará cuando se llame esa query.*/

  Query: {
    async getUsers() {
      const users = await admin
        .firestore()
        .collection('users')
        .get();
      return users.docs.map(user => user.data());
    },

    getProducts: async () => {
      let products = [];
      try {
        await admin
          .firestore()
          .collection('productos')
          .get()
          .then((querySnapshot) => {
            if (querySnapshot) {
              querySnapshot.forEach(product => {
                // el id de cada doc está en product.id
                products.push(product.data())
              })
            }
            else{
              console.log('No hay productos disponibles');
            }
          })  
        return products
      }
      catch (error) {
        console.log('Error: ', error);
      }
    },

    // Se puede hacer de las dos formas
    // async products() {
    //   const products = await admin
    //     .firestore()
    //     .collection('productos')
    //     .get();
    //   return products.docs.map(product => product.data());
    // },

    
    getProduct: async (parent, args) => {
      const { id } = args;
      let product;
      try {
        await admin
          .firestore()
          .collection('productos')
          .doc(args.id)
          .get()
          .then((item) => {
            if (!item.exists) console.log('No existe ese producto')
            else product = item.data();
          })        
        return product;
      }
      catch (error) {
        console.log('Error: ', error);
      }
    },

    async getCategories() {
      const categories = await admin
        .firestore()
        .collection('categorias')
        .get();
      return categories.docs.map(category => category.data());
    },

    async getSpecialties() {
      const specialties = await admin
        .firestore()
        .collection('especialidades')
        .get();
      return specialties.docs.map(specialty => specialty.data());
    }
  },

  Mutation: {
    addCategory: async (parent, args, context, info) => {
      const newCategory = await admin
        .firestore()
        .collection('categorias')
        .doc()
        .set(args);
      return newCategory;
    },

    setCategory: async (parent, args, context, info) => {
      console('REsolcver setCategory')
      const { id, nombre } = args;
      console.log('args: ',args);
      await admin
        .firestore()
        .collection('categorias')
        .doc(args.id)
        .update({nombre: args.nombre})
        .then(() => console.log('Categoría actualizada'))
        .catch((error) => console.error("Error actualizando categoría: ", error))
    },

    addSpecialty: async (parent, args, context, info) => {
      await admin
        .firestore()
        .collection('especialidades')
        .doc()
        .set(args);
      // return newSpecialty;
    },

    setSpecialty: async (parent, args, context, info) => {
      console.log('REsolcver setSpecialty, args: ',args)
      const { id, nombre } = args;
      await admin
        .firestore()
        .collection('especialidades')
        .doc(args.id)
        .update({nombre: args.nombre})
        .then(() => console.log('Especialidad actualizada'))
        .catch((error) => console.error("Error actualizando especialidad: ", error))
    },

  }
}

module.exports = resolvers;