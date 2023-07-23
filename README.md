# Pizzeria Don Remolo Project
Crypto Investment project

## Rutas Pizzas
- Obtener todas las pizzas: `GET http://localhost:8010/pizzas`
![Get pizzas](https://res.cloudinary.com/dxfksb8ua/image/upload/v1688318157/nzmcclciagp9didbzt7r.png)

- Buscar una pizza por ID: `GET http://localhost:8010/pizzas/:id`

- Crear una nueva pizza: `POST http://localhost:8010/pizzas`

- Editar una pizza por ID: `PUT http://localhost:8010/pizzas`

- Eliminar una pizza por ID: `DELETE http://localhost:8010/pizzas:id`

# .env
Debe crear un una Base de Datos en Mongo Atlas y configurar su BD y usuario, luego en su proyecto crear el archivo .env en la raiz de su proyecto con la siguiente variable de entorno: MONGO_URI=su url mongo atlas.

## `Tecnologías utilizadas`

Las tecnologías utilizadas en este proyecto son:

1. Node.js

2. Express.js

3. Axios

4. Cors

5. Mongoose
    
6. Morgan

7. Docker

8. Nodemon

9. Thunder Client
