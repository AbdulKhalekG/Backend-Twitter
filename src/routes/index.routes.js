const express = require('express')
const router = express.Router()
const usuario = require('../controllers/usuario')
const post = require('../controllers/post')
const like = require('../controllers/like')
const retweet=require('../controllers/retweet')

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


//rutas likes
router.get('/like-post/:id_post',like.post)
router.get('/like-user/:id_usuario',like.usuario)
router.post('/createlike-post',like.createlikepost)
router.post('/createlike-user',like.createlikeuser)


//retweets
router.get('/retweet-post/:id_post',retweet.post)
router.post('/retweet-create', retweet.create)


module.exports = router