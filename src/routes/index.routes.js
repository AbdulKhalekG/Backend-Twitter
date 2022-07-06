const express = require('express')
const router = express.Router()
const usuario = require('../controllers/usuario')
const post = require('../controllers/post')

//Rutas para los users
router.get('/register', usuario.register)
router.get('/login', usuario.login)
router.get('/modify', usuario.modify)

//busqueda de usuarios por id
router.get('/search-user/:id_usuario',usuario.searchiduser)



//Rutas para los posts
router.get('/create-post', post.create)
router.get('/edit-post',post.edit)
router.get('/like',post.like)

//busqueda de post por id
router.get('/search-post/:id_post',post.searchid)

//busqueda de post por username
router.get('/search-usernamepost/:username', post.searchusernamepost)


module.exports = router