const {response,request}=require('express')

//como code no sabe que tipo de datos es 
//voy a a definir arriba una const response de express...
//aca abajo definimos la función:tomamos la función usuariosGet y la pegamos en usuarios routes
const usuariosGet=(req, res=response) => {

    const {q,nombre='No Name',apikey,page=1,limit}=req.query
    //en vez de poner query, lo desestructuro

    res.json ({
        msg:'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
        
    })
}

//usuariosPost
const usuariosPost=(req, res=response) => {
   
    const {nombre,edad,id}=req.body
    //puede ir body solo, pero lo desestructuro en nombre,apellido,etc
    res.status(201).json ({
        msg:'post API - controlador',
        nombre,
        edad,
        id
    })
}
//usuariosPut
const usuariosPut=(req, res=response) => {
    
    const {id}=req.params
    
    res.status(500).json ({
        msg:'put API- controlador',
        id
    })
}

//usuariosPatch
const usuariosPatch=(req, res=response) => {
    res.json ({
        msg:'patch API - controlador'
    })
}
//usuariosDelete
const usuariosDelete= (req, res=response) => {
    res.json ({
        msg:'delete API - controlador'
    })
}

module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}