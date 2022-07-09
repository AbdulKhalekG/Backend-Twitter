const express = require ('express')
const {route}= require('./routes/index.routes')
const passport = require('passport')
const cookieParser= require("cookie-parser")
const PassportLocal=require('passport-local').strategy;



const app = express()

//Middleware
//hace referencia a unas funciones que se ejecutan antes de llegar a las rutas

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(cookieParser('jajaja'));
app.use(session({
    secret: 'jajaja',
    resave:true,
    saveUniunitialized:true
}));


app.use(passport.initialize());
app.use(passport.session);

// ROUTES para utilizar las rutas

app.use( require('./routes/index.routes'))

app.listen(5000, ()=>{
    console.log('Servidor a la espera de conexiones')
})

passport.use(new PassportLocal(function(username,password,done){

    if(username==="jose"&& password==="123")
    return done(null,{id:1,name:"jairo"})
    done(null,false)
}));

//serialization

passport.serializedUser(function(user,done){
    done(null,user.id);
})

//deserialization

passport.deserializeUser(function(id,done){
    done(null,{id: 1, name:"jairo"});
})

app.post("/login",passport.authenticate('local',{
    successRedirect:"/",
    failureRedirect:"login"
}))


