const { Pool } = require('pg');

const config={
    user:'postgres',
    host:'localhost',
    password:'123',
    database:'sql'
};

const pool = new Pool(config);

const createuser= async (req,res) =>{

    const{ nombre, username, correo, bio, direccion, birthday, clave} = req.body;
    const response = await pool.query('INSERT INTO usuarios (nombre, username, correo, bio, direccion, birthday, clave) VALUES($1, $2, $3, $4, $5, $6, $7)', [nombre, username, correo, bio, direccion, birthday,clave])
    console.log(response);
}

module.exports={
    createuser
}


