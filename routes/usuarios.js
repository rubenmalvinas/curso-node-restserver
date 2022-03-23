const {Router}=require('express')
const {usuariosGet,
usuariosPut,
usuariosPost,
usuariosDelete,
usuariosPatch}=require('../controllers/usuarios')

//llamo a la funcion:
const router=Router()

//la ruta es el router ge '/', el resto es el controlador y debería ir en archivo independiente
router.get('/',usuariosGet )

router.post('/', usuariosPost)

router.put('/:id', usuariosPut)

router.patch('/', usuariosPatch)

router.delete('/', usuariosDelete)


module.exports=router