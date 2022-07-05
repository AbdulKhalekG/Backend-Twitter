const { Pool } = require('pg');

const config={
    user:'postgres',
    host:'localhost',
    password:'123',
    database:'sql'
};

const pool = new Pool(config);
//funcion crear usuario
const createuser= async (req,res) =>{

    const{ nombre, username, correo, bio, direccion, birthday, clave} = req.body;
    const response = await pool.query('INSERT INTO usuarios (nombre, username, correo, bio, direccion, birthday, clave) VALUES($1, $2, $3, $4, $5, $6, $7)', [nombre, username, correo, bio, direccion, birthday,clave])
    console.log(response);
}

const modifyuser=async (req,res)=>{

    const{ nombre, username, correo, bio, direccion, birthday, clave} = req.body;
    const response = await pool.query('UPDATE usuarios SET nombre= 1$ username= 2$, correo=3$, bio =4$, direccion=5$, birthday=6$, clave=7$ WHERE id_usuario', [nombre, username, correo, bio, direccion, birthday,clave,id_usuario])
}

console.log(response)



module.exports={
    createuser,
    modifyuser
}


