# Ecommerce Backend - Entrega 1

Backend API en Node.js + Express + MongoDB.
Incluye CRUD de usuarios, autenticación con Passport y login con JWT.
Ruta protegida `/api/sessions/current`.

## Requisitos
- Node 18+ (recomendado)
- MongoDB (Atlas o local)

## Variables de entorno (.env)
Crear un archivo `.env` en la raíz con:

PORT=8080
MONGO_URL=TU_URI_DE_MONGODB
JWT_SECRET=TU_SECRETO

## Instalación y ejecución
```bash
npm install
npm run start
