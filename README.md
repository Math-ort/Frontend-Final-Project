Full Stack App – Tienda de Ropa 

Aplicacion full stack de una tienda de ropa con catalogo de productos.
Incluye un frontend en React y un backend con Node.js + Express, conectado a MongoDB Atlas.

* Tecnologías utilizadas

* Frontend
React
Vite
React Router DOM
Axios
* Backend
Node.js
Express
MongoDB + Mongoose
JWT (autenticación)
Cloudinary (gestión de imágenes)
Multer (subida de archivos)


⚙️ Instalación
1️⃣ Clonar el repositorio
git clone <tu-repo>
cd Final\ Project
2️⃣ Instalar dependencias
Frontend
cd Frontend
npm install
Backend
cd ../Backend-Final-Project
npm install
Variables de entorno
Backend (.env)

Ejemplo:

PORT=3000
MONGO_URI=tu_uri_de_mongodb
JWT_SECRET=tu_secreto
CLOUDINARY_CLOUD_NAME=xxx
CLOUDINARY_API_KEY=xxx
CLOUDINARY_API_SECRET=xxx
Frontend (.env)


* Funcionalidades principales

 Productos
Listado de productos
Creación de productos (Route path="/products/create")
Subida de imágenes con Cloudinary
Gestión de productos
Control del catálogo


* Scripts disponibles
Frontend
npm run dev      # servidor desarrollo
npm run build    # build producción
npm run preview  # preview build
npm run lint     # linting
Backend
npm start        # iniciar servidor
npm test         # tests con Jest

Las imágenes se gestionan con:

Cloudinary
Multer + almacenamiento en cloud

* Notas
Footer ficticio
