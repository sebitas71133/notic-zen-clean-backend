# 📝 Notes API - Backend REST con TypeScript y Express

Este proyecto es una API RESTful desarrollada con **Node.js**, **Express** y **TypeScript**, diseñada para gestionar usuarios, notas, subnotas, categorías, etiquetas e imágenes. Incluye autenticación JWT, moderación de contenido, integración con servicios externos y manejo de archivos en la nube con Cloudinary.

---

## 🚀 Tecnologías principales

- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [MongoDB & PostgreSQL](https://www.mongodb.com/), [https://www.postgresql.org/](https://www.postgresql.org/)
- [JWT Auth](https://jwt.io/)
- [Cloudinary](https://cloudinary.com/)
- [Nodemailer](https://nodemailer.com/)
- [Sightengine (moderación)](https://sightengine.com/)
- Validación con [Zod](https://zod.dev/)

---

## 📦 Instalación

1. **Clona el proyecto**

   ```bash
   git clone https://github.com/tu-usuario/notes-api.git
   cd notes-api
   ```

2. **Crea el archivo de entorno**

   ```bash
   cp .env.template .env
   ```

   Edita `.env` con tus credenciales y configuraciones personalizadas.

3. **Instala dependencias**

   ```bash
   npm install
   ```

4. **Levanta los servicios externos (opcional)**
   Si vas a usar base de datos por Docker, edita `docker-compose.yml` y ejecuta:

   ```bash
   docker-compose up -d
   ```

5. **Ejecuta el proyecto en desarrollo**
   ```bash
   npm run dev
   ```

---

## 🛠️ Scripts disponibles

| Script          | Descripción                      |
| --------------- | -------------------------------- |
| `npm run dev`   | Levanta el servidor en modo dev  |
| `npm run build` | Compila el proyecto a JavaScript |
| `npm start`     | Ejecuta el servidor compilado    |
| `npx prisma`    | Accede a comandos de Prisma      |

---

## 🔐 Variables de entorno (.env.template)

Contiene la configuración necesaria para la conexión a base de datos, servicios externos y autenticación:

```env
PORT=3000

# MongoDB
MONGO_URL=mongodb://mongo-user:123456@localhost:27017
MONGO_DB_NAME=mystore

# PostgreSQL / Prisma
PG_HOST=localhost
PG_PORT=5432
PG_USER=postgres
PG_PASSWORD=root
PG_DATABASE=notez
DATABASE_URL="postgresql://postgres:root@localhost:5432/notez"

# JWT
JWT_SEED=123456

# Email / Nodemailer
MAILER_SERVICE=gmail
MAILER_EMAIL=example@gmail.com
MAILER_SECRET_KEY=yourpassword

# Cloudinary
CLOUDINARY_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...

# Sightengine (moderación de imágenes)
SIGHTENGINE_USER=...
SIGHTENGINE_SECRET=...
SIGHTENGINE_API_URL=https://api.sightengine.com/1.0/check.json

# URLs
WEBSERVICE_URL=http://localhost:3000
CLIENT_URL=http://localhost:5173
```

---

## 📘 Documentación de la API

La documentación completa de los endpoints se encuentra en:

👉 [`ENDPOINTS_PROYECTO_NOTAS.md`](./ENDPOINTS_PROYECTO_NOTAS.md)

Incluye rutas protegidas por JWT, manejo de roles (`admin`, `user`), operaciones CRUD de notas, subnotas, imágenes y más.

---

## ✅ Estado del proyecto

- [x] Autenticación con JWT
- [x] Registro y validación de email
- [x] Gestión de usuarios y roles
- [x] CRUD de notas, categorías y etiquetas
- [x] Subnotas relacionadas
- [x] Cloudinary para manejo de imágenes
- [x] Moderación automática con Sightengine
- [x] Panel de administración (rutas privadas)

---

## 📄 Licencia

MIT
