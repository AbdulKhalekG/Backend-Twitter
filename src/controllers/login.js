const login= {}
const passport= require('passport')

login.authentication=(req,res)=>{
    passport.authenticate('home.location'),{
        


        succesRedirect: '/perfil',
        failureRedirect:'/login',
        failureFlash:true

    }
    res.send('received')
}