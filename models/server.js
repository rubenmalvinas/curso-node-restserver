const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        //cuando se arme el construc voy a llamar mis rutas
        this.usuariosPath='/api/usuarios'

        //Middleware funciones que van añadir funcionalidad a mis webserver
        //es una funcion que va a ejecutarse cuando levantemos nuestro servidor
        this.middleware()

        //Rutas de mi aplicacion
        this.routes()

    }

    //vamos a crear otro metodos middlewares usan la palabra use
    middleware() {

        //para definir desde que sitio entran a mi api
        this.app.use(cors())
        
        //Lectura y parseo del body en formato json
        this.app.use(express.json())

        //directorio publico
        this.app.use(express.static("public"))

    }

    //voy a definir las rutas que hay en el app.js con un metodo:
    //this.app.get es la ruta, ,el resto es el controlador hasta })
    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    //creo un nuevo metodo de listen
    listen() {
        //console log
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port)
        })
    }




}

module.exports = Server