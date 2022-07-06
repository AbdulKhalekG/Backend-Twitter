const { Pool } = require('pg');

const config={
    user:'postgres',
    host:'localhost',
    password:'123',
    database:'sql'
};
//funciones
const pool = new Pool(config);
//funcion create user
const createuser= async (req,res) =>{

    const{ nombre, username, correo, bio, direccion, birthday, clave} = req.body;
    const response = await pool.query('INSERT INTO usuarios (nombre, username, correo, bio, direccion, birthday, clave) VALUES($1, $2, $3, $4, $5, $6, $7)', [nombre, username, correo, bio, direccion, birthday,clave])
    console.log(response);
}

//funcion modify user
const modifyuser=async (req,res)=>{

    const{ nombre, username, correo, bio, direccion, birthday, clave} = req.body;
    const response = await pool.query('UPDATE usuarios SET nombre= $1 username= $2, correo=$3, bio =$4, direccion=$5, birthday=$6, clave=$7 WHERE id_usuario', [nombre, username, correo, bio, direccion, birthday,clave,id_usuario])
    console.log(response);

}


//funcion create post

const createpost=async (req,res)=> {
    const{contenido, username, fecha, hora} = req.body
    const response = await pool.query('INSERT INTO post(contenido, username, fecha, hora) VALUES($1,$2,$3,$4)',[contenido,username,fecha,hora])
    console.log(response);
}

//funcion edit post
const editpost=async(req,res)=>{

    const{id_post, contenido, username, fecha, hora} = req.body
    const response = await pool.query('UPDATE post SET contenido=$1, username=$2, fecha=$3, hora=$4 WHERE id_post=$5', [contenido,username,fecha,hora,id_post])
    console.log(response)
}

//buscando post id
const searchidpost=async(req,res)=>{
    const id_post =req.params.id_post
    const response=await pool.query('SELECT *FROM post WHERE id_post=$1', [id_post])
    console.log(response.rows);
}




module.exports={
    createuser,
    modifyuser,
    createpost,
    editpost,
    searchidpost
}


