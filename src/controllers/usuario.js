const usuario = {}

usuario.index = (req,res)=>{
res.send('correct connection')

}


usuario.register= (req,res)=>{

    res.send('registry users')

}

usuario.login= (req,res)=> {
    res.send('login user')

}

usuario.modify= (req,res) => {

    res.send('modify user')

}

usuario.delete= (req,res)=>{
    res.send('delete user')
}

module.exports = usuario