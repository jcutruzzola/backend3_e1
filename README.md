
# API REST - Pet Adoption System

Este proyecto es una API RESTful desarrollada con **Node.js** y **Express** que gestiona usuarios, mascotas y adopciones. La base del repositorio venía prearmada con una estructura básica de rutas y conexión a MongoDB. A este proyecto se le integraron las siguientes funcionalidades adicionales:

✅ Sistema de testing  
✅ Mocks de datos para pruebas  
✅ Documentación interactiva con Swagger  
✅ Contenerización con Docker

---

## Tecnologías utilizadas

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- cookie-parser
- CORS
- Swagger (para documentación de API)
- Jest / Supertest (opcional para testing)
- Docker + DockeHub

---

## Funcionalidades agregadas

🧪 **Testing**  
Se incorporó una estructura de testing para garantizar el correcto funcionamiento de los endpoints.

🧪 **Mocking de datos**  
Se implementaron endpoints específicos para generar datos falsos que permiten probar la API sin necesidad de usar datos reales (`/api/mocks`).

📚 **Documentación Swagger**  
Se agregó documentación interactiva con **Swagger UI**, accesible desde: **http://localhost:8080/apidocs**

🐳 **Docker**  
La aplicación puede ser ejecutada en contenedores Docker para facilitar el despliegue y la portabilidad.

**LINK DockerHub**
https://hub.docker.com/repository/docker/jcutruzzola/entrega-final-be3/general

## 📁 Endpoints disponibles

| Ruta Base         | Descripción                     |
|-------------------|----------------------------------|
| `/api/users`      | Gestión de usuarios              |
| `/api/pets`       | Gestión de mascotas              |
| `/api/adoptions`  | Gestión de adopciones            |
| `/api/sessions`   | Registro / login de usuarios     |
| `/api/mocks`      | Generación de datos mock         |
| `/apidocs`        | Documentación Swagger            |


🧪 Testing
El sistema de pruebas permite validar las rutas principales de forma automatizada. Ideal para entornos de desarrollo o integración continua.

🛠️ Swagger
La documentación generada automáticamente se encuentra en /apidocs, y describe todos los endpoints disponibles, sus parámetros, respuestas esperadas y ejemplos.
