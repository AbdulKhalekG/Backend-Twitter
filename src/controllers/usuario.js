const crearusuario = require('../database')
const modifyuser=require('../database')

//este constante esta vacia para las instancias
const usuario = {}



usuario.register= (req,res)=>{
    try{
crearusuario.createuser(req,res);
    res.send('registry users')

}catch(e){
    console.log(e);
}

}

usuario.login= (req,res)=> {
    res.send('login user')

}

usuario.modify= (req,res) => {
try{
    modifyuser.modifyuser(req,res);
    res.send('modify user')
}catch(e){
    console.log(e)
}

usuario.searchiduser=(req,res)=>{
    try{
        searchuserid.searchuserid(req,res);
        res.send('search id user')
    }catch(e){
        console.log(e)
    }
}

} 







module.exports = usuario