const {response} = require('express')
const likes=require('../database')

const like={}

like.post=(req,res)=>{
    try{
        likes.likepost(req,res)
        res.json(response)
    }catch(e){
        console.log(e);
    }
}

module.exports = like;