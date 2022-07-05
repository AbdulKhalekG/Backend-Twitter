const { createpost } = require("../database")

const post={}

post.create=(req,res)=>{
    try{
        createpost.createpost(req,res);
        res.send('create post')
    }catch(e){
        console.log(e)
    }

    

}

post.like=(req,res)=>{

    res.send('like')

}

post.edit=(req,res)=>{

    res.send('edit post')

}

module.exports= post