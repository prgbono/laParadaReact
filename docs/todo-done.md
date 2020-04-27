TODO
HOY
- Leer Apollo tuto https://www.apollographql.com/docs/react/, incluyendo toda la parte de Fetching Data.
  - Cargar productos mediante useQuery (https://www.apollographql.com/docs/react/data/queries/)

- Leer Mutations del tuto -> https://www.howtographql.com/react-apollo/3-mutations-creating-links/. Parece que está desfasado. 
  No usa useQuery ni useMutation

- Recomendable el tuto de FullStack de Apollo https://www.apollographql.com/docs/tutorial/introduction/
- Las mutations me da error en el server GraphQL y no se porqué aún...
- Recopilar todas las queries en una carpeta Queries tal como está hecho en ClaveX
- Los campos especialidad y categoría de los productos deben estar reducidos a las opciones de un selectable
- Probar a quitar el objeto Firebase de src/Firebase (y los imports de Firebase en el lado cliente). Esto 
  es porque supuestamente no hace falta tras haberlo añadido a /server/scr/server.js. Puedo borrar el archivo src/firebase? No debería haber presencia de Firebase en el front si ya GraphQL se ha conectado con éste. 
- Imrpimir en PDF todos los tutoriales seguidos y meterlos en /docs


DONE
LUN - 27/04/2020  

26/04/2020
- Me sobra la carpeta src de /server/src???? Sí. Antes de borrala mover archivos y leer toda la parte de Backend del tuto apollo-graph
- Hacer queries mediante GraphQL -> https://www.howtographql.com/react-apollo/2-queries-loading-links/

25/04/2020
- Empezar a dEfinir el schema (tyoeDef) correspondiente a La Parada.
- Mutations desde graphQL server local. En concreto adiciones en las colecciones de Firestore

23/04/2020
- Conservar las librerías typescript y tslint? 
- Añadir files tslint y tsconfig del raíz del github?
- Es necesario FirebaseFunctions??
- Clean de comments y de consoles
- Actualizar en el readme si el vídeo que estoy siguiendo ahora es correcto hacerlo saber en el Readme.
- Actualizar en el readme la forma de levantar el servidor local :3000 y el servidor graphQL en el puerto 4000/graph con el comando     (script definido en package.json) graph