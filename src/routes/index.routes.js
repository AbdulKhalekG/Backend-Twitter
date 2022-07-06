const express = require('express')
const router = express.Router()
const usuario = require('../controllers/usuario')
const post = require('../controllers/post')

//Rutas para los users
router.get('/register', usuario.register)
router.get('/login', usuario.login)
router.get('/modify', usuario.modify)


//Rutas para los posts
router.get('/create-post', post.create)
router.get('/edit-post',post.edit)
router.get('/like',post.like)


router.get('/search-post/:id_post',post.searchid)
router.get('/search-usernamepost/:username', post.searchusernamepost)


module.exports = router