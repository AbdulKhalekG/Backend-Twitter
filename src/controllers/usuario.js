const crearusuario = require('../database')


//constante vacia para las instancias
const usuario = {}



usuario.register= (req,res)=>{
    try{
crearusuario.crearusuario(req,res);
    res.send('registry users')

}catch(e){
    console.log(e);
}

}

usuario.login= (req,res)=> {
    res.send('login user')

}

usuario.modify= (req,res) => {

    res.send('modify user')

}



module.exports = usuario