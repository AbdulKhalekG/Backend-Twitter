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

like.usuario=(req,res)=>{
    try{
        likes.likeuser(req,res)
        res.json(response)
    }catch(e){
        console.log(e);
    }
}

like.createlikepost=(req,res)=> {
    try{
        likes.createlikepost(req,res);
        res.json(response)
    }catch(e) {
        console.log(e);
    }
}

module.exports = like;