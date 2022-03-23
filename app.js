require('dotenv').config()
const Server=require('./models/server')


const server= new Server()

//ahora tengo que lanzar el metodo para lanzar mi servidor
server.listen()