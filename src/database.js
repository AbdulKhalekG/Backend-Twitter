const { Pool } = require('pg');

const config={
    user:'postgres',
    host:'localhost',
    password:'123',
    database:'sql'
};

const pool = new Pool(config);

const getUsuarios= async () =>{

    try{
        
        const res=await pool.query('select * from usuarios');
        console.log(res.rows);
        pool.end();
    } catch (e) {
        console.log(e);
    }
};

const insertUsuarios = async () => {
    try {
        const text = 'INSERT INTO usuarios (id_usuario, nombre, username, correo, bio, direccion, birthday, clave) VALUES($1, $2, $3, $4, $5, $6, $7, $8)'
        const values = ['1', 'Jose ', 'Jose47', 'Jose47@gmail.com', 'Buenas soy Jose y espero', 'amparo', '25', '47jose' ]

        

        const res = await pool.query(text, values);
        console.log(res);
        pool.end();
    } catch(e) {
        console.log(e);
    }
}

const deleteUser = async () => {
    const text = 'DELETE FROM usuarios WHERE nombre = $1';
    const value = ['Jose'];

    const res = await pool.query(text, value);
    console.log(res)

}




getUsuarios();