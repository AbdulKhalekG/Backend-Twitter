const express = require('express')
const router = express.Router()
const usuario = require('../controllers/usuario')
const post = require('../controllers/post')

//Rutas para los users
router.post('/register', usuario.register)
router.get('/login', usuario.login)
router.put('/modify/:id', usuario.modify)

//busqueda de usuarios por id
router.get('/search-user/:id_usuario',usuario.searchiduser)
//busqueda de username
router.get('/search-username/:username',usuario.searchuser)



//Rutas para los posts
router.post('/create-post', post.create)
router.put('/edit-post',post.edit)
router.get('/like',post.like)

//busqueda de post por id
router.get('/search-post/:id_post',post.searchid)

//busqueda de post por username
router.get('/search-usernamepost/:username', post.searchuserpost)


module.exports = router