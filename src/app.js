const express = require ('express')
const {route}= require('./routes/index.routes')
const passport = require('passport')

const app = express()


// middlewares hace referencia a unas funciones que se ejecutan antes de llegar a las rutas

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(passport.initialize())
app.use(passport.session)

// ROUTES para utilizar las rutas

app.use( require('./routes/index.routes'))

app.listen(5000, ()=>{
    console.log('Servidor a la espera de conexiones')
})


