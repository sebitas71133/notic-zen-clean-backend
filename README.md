# 📝 Notes API - Backend REST con TypeScript y Express

Este proyecto es una API RESTful desarrollada con **Node.js**, **Express** y **TypeScript**, diseñada para gestionar usuarios, notas, subnotas, categorías, etiquetas e imágenes. Incluye autenticación JWT, moderación de contenido, integración con servicios externos y manejo de archivos en la nube con Cloudinary.

Ahora también soporta **compartir notas con roles (viewer/editor)** y **notificaciones en tiempo real** gracias a **WebSockets**.

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

## 🗂️ Estructura de la Base de Datos (PostgreSQL)

A continuación se muestra el diagrama de las tablas utilizadas en el proyecto:

![Diagrama de Base de Datos](https://github.com/user-attachments/assets/87f49899-0e0b-43b5-8a83-dcbe01621a20)

---

# 📚 ENDPOINTS.md – Documentación de API (Proyecto Notas Zen)

## 📌 Convenciones generales

- **Autenticación:**  
  Todos los endpoints protegidos requieren encabezado:  
  `Authorization: Bearer <token>`

- **Campos opcionales:**  
  Indicados con `?` en consultas y cuerpo de solicitudes.

- **Métodos HTTP:**
  - `GET`: Obtener recursos
  - `POST`: Crear recursos o acciones
  - `PUT`: Actualizar recursos
  - `DELETE`: Eliminar recursos

---

## 🛡️ Admin Routes

| Método | Endpoint                       | Descripción                                   | Auth     | Body | Ejemplo de Respuesta                                                             |
| ------ | ------------------------------ | --------------------------------------------- | -------- | ---- | -------------------------------------------------------------------------------- |
| GET    | `/api/admin/config`            | Configuración del sistema (moderación, email) | Admin ✅ | ❌   | `{ "moderationEnabled": true, "sendEmailEnabled": false }`                       |
| POST   | `/api/admin/moderation/toggle` | Alternar moderación de contenido              | Admin ✅ | ❌   | `{ "moderationEnabled": false, "message": "Moderation has been disabled" }`      |
| POST   | `/api/admin/send-email/toggle` | Alternar envío de emails automáticos          | Admin ✅ | ❌   | `{ "sendEmailEnabled": true, "message": "Send email feature has been enabled" }` |

---

## 🔐 Auth Routes

| Método | Endpoint                           | Descripción                    | Auth     | Body                                |
| ------ | ---------------------------------- | ------------------------------ | -------- | ----------------------------------- |
| POST   | `/api/auth/register`               | Registro de nuevo usuario      | ❌       | `{ name, email, password, image? }` |
| POST   | `/api/auth/login`                  | Login de usuario               | ❌       | `{ email, password }`               |
| GET    | `/api/auth/new`                    | Validación y renovación de JWT | ✅       | ❌                                  |
| GET    | `/api/auth/validate-email/:token`  | Validar email por token        | ❌       | ❌                                  |
| GET    | `/api/auth/resend-validation-link` | Reenviar link de validación    | ❌       | `{ email }`                         |
| GET    | `/api/auth/users`                  | Listado de usuarios (paginado) | Admin ✅ | ❌                                  |
| GET    | `/api/auth/users/email`            | Buscar usuario por email       | Admin ✅ | ❌                                  |
| GET    | `/api/auth/users/documents`        | Conteo global de registros     | Admin ✅ | ❌                                  |
| GET    | `/api/auth/users/:id`              | Info de usuario por ID         | Admin ✅ | ❌                                  |
| PUT    | `/api/auth/users/:id`              | Actualizar usuario por ID      | Admin ✅ | `{ name?, email? }`                 |
| DELETE | `/api/auth/users/:id`              | Eliminar usuario por ID        | ✅       | ❌                                  |
| POST   | `/api/auth/users/update-role`      | Cambiar rol de usuario         | Admin ✅ | `{ userId, roleId }`                |

---

## 📁 Category Routes

> Todas las rutas requieren JWT

| Método | Endpoint          | Descripción                   | Body/Params         |
| ------ | ----------------- | ----------------------------- | ------------------- |
| POST   | `/create`         | Crear categoría               | `{ name, color }`   |
| GET    | `/categories`     | Obtener categorías (paginado) | `?page, limit`      |
| GET    | `/categories/:id` | Obtener categoría por ID      | `:id`               |
| PUT    | `/categories/:id` | Actualizar categoría          | `{ name?, color? }` |
| DELETE | `/categories/:id` | Eliminar categoría            | `:id`               |

---

## 🏷️ Tag Routes

> Todas las rutas requieren JWT

| Método | Endpoint  | Descripción                 | Body/Params         |
| ------ | --------- | --------------------------- | ------------------- |
| POST   | `/create` | Crear etiqueta              | `{ name, color }`   |
| GET    | `/`       | Obtener todas las etiquetas | —                   |
| GET    | `/:id`    | Obtener etiqueta por ID     | `:id`               |
| PUT    | `/:id`    | Actualizar etiqueta         | `{ name?, color? }` |
| DELETE | `/:id`    | Eliminar etiqueta           | `:id`               |

---

## 📝 Note Routes

> Todas las rutas requieren JWT

| Método | Endpoint     | Descripción           | Body/Params                                                               |
| ------ | ------------ | --------------------- | ------------------------------------------------------------------------- |
| POST   | `/create`    | Crear nota            | `{ title, categoryId, content?, images?, tags? }`                         |
| GET    | `/notes`     | Obtener notas         | `?page, limit`                                                            |
| GET    | `/stats`     | Estadísticas globales | —                                                                         |
| GET    | `/notes/:id` | Obtener nota por ID   | `:id`                                                                     |
| PUT    | `/save/:id`  | Actualizar nota       | `{ title, categoryId, content?, images?, tags?, isPinned?, isArchived? }` |
| DELETE | `/notes/:id` | Eliminar nota         | `:id`                                                                     |

---

## 🧩 SubNote Routes

> Todas las rutas requieren JWT

| Método | Endpoint                       | Descripción                  | Body/Params                               |
| ------ | ------------------------------ | ---------------------------- | ----------------------------------------- |
| GET    | `/:noteId/subnotes`            | Obtener subnotas de una nota | `noteId`, `?page, limit, tagId, sort*`    |
| GET    | `/subnotes`                    | Obtener todas las subnotas   | —                                         |
| POST   | `/:noteId/subnotes`            | Crear subnota                | `{ title, description?, tags?, images? }` |
| GET    | `/:noteId/subnotes/:subNoteId` | Obtener subnota por ID       | `noteId`, `subNoteId`                     |
| PUT    | `/:noteId/subnotes/:subNoteId` | Actualizar subnota           | `{ title, description?, tags?, images? }` |
| DELETE | `/:noteId/subnotes/:subNoteId` | Eliminar subnota             | —                                         |

---

## 🛠️ Admin - Imágenes y Subnotas

> Requiere autenticación como Admin

| Método | Endpoint                    | Descripción                            |
| ------ | --------------------------- | -------------------------------------- |
| POST   | `/admin/images/cleanup`     | Eliminar imágenes huérfanas (notas)    |
| GET    | `/admin/images/all`         | Obtener todas las imágenes (notas)     |
| POST   | `/admin/sub-images/cleanup` | Eliminar imágenes huérfanas (subnotas) |
| GET    | `/admin/sub-images/all`     | Obtener todas las imágenes (subnotas)  |

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

## 🧩 Video

https://github.com/user-attachments/assets/e1449e95-3b1a-4449-8c1a-b0ba1181dc10

---

## 🛠️ Autor

Jesús Sebastián Huamanculi Casavilca - GitHub

---


## 📄 Licencia

MIT
