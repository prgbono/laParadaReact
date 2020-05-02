## HOY
- listar categorias, especialidades y productos
- listar producto
- Update categorias
- Update especialidad
- update producto
- remove categoria
- remove especialidad
- remove producto
- Las mutations me da error en el server GraphQL y no se porqué aún...
- REach router path='product/:id'

## TOD
- Traer a React el id de documento / colección de Firebase que se modifica / crea / consulta
- Como gestionar lo de los id que no devuelve graphQL. Ver cómo se trabaja con esto. Posibilidad de firegraph o algo que te facilite el manejo de ID's
- Reach Router para dividir las vistas de categorias, productos y eso
- Editar las reglas de Firebase para que la BD no sea pública - https://console.firebase.google.com/project/laparada-40337/database/firestore/rules
  Hemos detectado los siguientes problemas en tus reglas de seguridad:
  Cualquier usuario puede leer toda tu base de datos
  Cualquier usuario puede escribir en toda tu base de datos
  El proyecto no tiene reglas de seguridad sólidas, por lo que cualquier persona puede acceder a toda la base de datos. Los atacantes podrían robar, modificar o eliminar datos y hacer subir tu factura.
- Continuar por la sección Mutations del tuto https://www.apollographql.com/docs/react/ 
- Una vez terminado el anterior, continuar donde dejé -> https://www.howtographql.com/react-apollo/3-mutations-creating-links/. 
- Meter imágenes a la BBDD, por ejemplo a productos
- Recomendable el tuto de FullStack de Apollo https://www.apollographql.com/docs/tutorial/introduction/
- Los campos especialidad y categoría de los productos deben estar reducidos a las opciones de un selectable
- Probar a quitar el objeto Firebase de src/Firebase (y los imports de Firebase en el lado cliente). Esto 
  es porque supuestamente no hace falta tras haberlo añadido a /server/scr/server.js. Puedo borrar el archivo src/firebase? No debería haber presencia de Firebase en el front si ya GraphQL se ha conectado con éste. 
- Imrpimir en PDF todos los tutoriales seguidos y meterlos en /docs


## DONE
SÁB 2/5/20
- Listar un producto mediante su id de doc / collection en la query. Un get.

MIE - 29/04/2020
- Escibir en los archivos de query si son queries o mutations

MAR - 28/04/2020 -> Estudiando cómo referenciar ID de documento de Firebase en las queries
LUN - 27/04/2020  
- El tutorial que sigo (https://www.howtographql.com/react-apollo/3-mutations-creating-links/) veo que no está usando useQuery y useMutation. Me cambio a https://www.apollographql.com/docs/react/ que sí que lo usa. Siguiendo este tuto hago las queries y las mutations con useQuery y useMutation.
  - Cargar productos mediante useQuery (https://www.apollographql.com/docs/react/data/queries/)
  - Hacer mutations mediante useMutation (NO COMPLETADO Aún) - (https://www.apollographql.com/docs/react/data/mutations/). Necesito ver cómo traerme el docId de los documentos de Firestore.
- Recopilar todas las queries en una carpeta Queries tal como está hecho en ClaveX

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