## HOY 
- Ver ReachLink de ReachRouter que implementé ayer en Link (components)
- Cargar el contenido dependiendo de la opción elegida en el sidebar
- Qué es Emotion- https://emotion.sh/docs/introduction

## TODO
- Solucionar el error común que aparece al usar la app (error 400 -> Unhandled Rejection (Error): Network error: Response not successful: Received status code 400)
- Reach Router -> Cargar artículo individualmente una vez dentro de la lista de artículos (pasar el id). NEsted links. Hacer el reach router /products/productId - path='product/:id'
- Pestaña principal Inicio: PEdidos del día, productos más vendidos, productos bajos de stock, mejores clientes....
- Añadir un LocationProvider para el histórico?? Puede ser bastante interesante y está  implementado en ClaveX
- Hace falta una folder src/pages??
- Definir en Firestore la relación especialidades y categorías. Echar un vistazo https://www.youtube.com/watch?v=jm66TSlVtcc
- Las mutations (creaciones) me da error en el server GraphQL y no se porqué aún...
- CRUD de las colecciones. DOne -> C y R. 
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
- Gráficas. Añadir dependiendo de las ventas y los pedidos... Librería Nivo https://nivo.rocks/components
- TODO's y consoles
- Interfaz movil. Flutter? ReactNative?


## DONE
JUE 7/5/2020
- Pasar logo a png y reducir el tamaño

MIE 6/5/2020
- Logo sin optimizar
- MEter componentes básicos de AntD en pages/Dashboard que va a ser la pág principal. 

MAR 5/5/2020
- Reach router en App.js

LUN 4/5/2020
- Repo creado para Ant Design Pro MyApp https://pro.ant.design/docs/layout

DOM 3/5/20
- Inicio de AntD. Posibilidad de trabajar con esta template: https://github.com/ant-design/ant-design-pro cuya documentación está aquí: https://pro.ant.design/docs/getting-started
- Remove categories y specialties

SÁB 2/5/20
- Set / update categories
- Listar un producto mediante su id de doc / collection en la query. Un get.
- listar categorias, especialidades y productos
- COmponentes para Specialties
    - lista
    - individual NO HECHO
- Resolvers para Specialties
    - listar
    - update

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
- Actualizar en el readme la forma de levantar el servidor local :3000 y el servidor graphQL en el puerto 4000/graph con el comando (script definido en package.json) graph


## ANT DESIGN PRO
- Usar la carpeta mock
  - [ ] Traspasar todo lo hecho en laParadaReact o al reves??? 
    - [ ] Servidor local GraphQL y Apollo
    - [ ] Conexión con Firestore
    - [ ] App.js… carpeta de documentación, archivo de readme…. changeLog, Todo-done, version de react
- Definir las pantallas para esas tres 'entidades', productos, especialidades y categorías para 
  tener claro el UI. Buscar por ahí en AntD (https://ant.design/) que es lo usado en HK ClaveX
  Template Ant Design Pro Master -> https://scaffold.ant.design/#/scaffolds/ant-design-pro
  He encontrado una template que puede ser bastante interesante. Está en Downloads / My app. 
  - [ ] Asegurarte que es de react-create-app. 
  - [x] Arreglar lo de locale y echarle un vistazo comparando pantallas y tus necesidades. 
    Solución -> Añadir el nodo 'resolutions' en el package y hacer yarn install 
  - [x] Cambiar idioma
  - [x] Matchear pantallas con lo que tienes en la mente. Login, tabla de productos, de especialidades...
  - [x] Cambiar datos de prueba a ver qué tal se ve
- Archivos de idioma español
