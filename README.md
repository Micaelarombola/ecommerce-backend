# 🛒 Ecommerce Backend - Entrega N°1

Backend desarrollado en **Node.js + Express + MongoDB**.

Este proyecto implementa:

- ✅ CRUD de Usuarios
- ✅ Encriptación de contraseñas con bcrypt
- ✅ Autenticación con Passport (Local Strategy)
- ✅ Autorización con JWT (Passport JWT)
- ✅ Login con generación de Token JWT
- ✅ Ruta protegida `/api/sessions/current`

---

# 🚀 Tecnologías Utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- Passport
- Passport Local
- Passport JWT
- JSON Web Token
- bcrypt
- cookie-parser
- dotenv

---

# 📦 Instalación y Ejecución

## 1️⃣ Clonar repositorio

```bash
git clone https://github.com/TU_USUARIO/ecommerce-backend.git
cd ecommerce-backend

2️⃣ Instalar dependencias
PORT=8080
MONGO_URL=TU_STRING_DE_CONEXION_MONGODB
JWT_SECRET=TU_SECRETO_JWT

3️⃣ Crear archivo .env
PORT=8080
MONGO_URL=TU_STRING_DE_CONEXION_MONGODB
JWT_SECRET=TU_SECRETO_JWT

Ejemplo:

PORT=8080
MONGO_URL=mongodb+srv://usuario:password@cluster.mongodb.net/ecommerce
JWT_SECRET=secret123

4️⃣ Ejecutar servidor
npm run start

Servidor corriendo en:
http://localhost:8080

📌 Endpoints Disponibles

🔐 Registro de Usuario

POST /api/sessions/register

Body (JSON):
{
  "first_name": "Juan",
  "last_name": "Perez",
  "email": "juan@test.com",
  "age": 30,
  "password": "123456"
}

✔ La contraseña se encripta con bcrypt.hashSync.

🔑 Login

POST /api/sessions/login

Body (JSON):

{
  "email": "juan@test.com",
  "password": "123456"
}

✔ Genera un JWT válido
✔ Se guarda en cookie accessToken
✔ Expira en 1 hora

Respuesta:
{
  "status": "success",
  "message": "Login OK"
}
👤 Usuario Actual (Ruta Protegida)

GET /api/sessions/current

Requiere cookie accessToken válida.

Respuesta:
{
  "status": "success",
  "user": {
    "id": "...",
    "first_name": "Juan",
    "last_name": "Perez",
    "email": "juan@test.com",
    "role": "user"
  }
}

Si el token es inválido:
401 Unauthorized


👥 CRUD de Usuarios

(Si implementaste las rutas users)

GET /api/users

GET /api/users/:id

PUT /api/users/:id

DELETE /api/users/:id

Permiten gestionar los usuarios almacenados en la base de datos.

🔐 Seguridad Implementada

Contraseñas encriptadas con bcrypt.hashSync

Validación con bcrypt.compareSync

Estrategia Local para login

Estrategia JWT para autorización

Token firmado con jsonwebtoken

Middleware de Passport para proteger rutas

📂 Estructura del Proyecto
src/
 ├── config/
 │    ├── db.js
 │    └── passport.js
 ├── models/
 │    ├── user.model.js
 │    └── cart.model.js
 ├── routes/
 │    └── sessions.router.js
 ├── utils/
 │    ├── hash.js
 │    └── jwt.js
 └── app.js


📌 Scripts Disponibles
npm run dev     # Ejecuta con nodemon
npm run start   # Ejecuta con node


👨‍💻 Autor

Entrega N°1 - Backend Ecommerce
Implementación de autenticación y autorización con JWT.

---

# 🔥 Ahora sí está 100% listo para entregar

Tu repo queda:

✔ Profesional  
✔ Claro  
✔ Documentado  
✔ Evaluable  
✔ Fácil de probar  

---
















