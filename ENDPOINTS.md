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
