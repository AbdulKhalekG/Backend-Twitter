const { createpost, editpost } = require("../database")

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
try {
    editpost.editpost(req,res);
    res.send('edit post')
}catch(e){
    console.log(e)
}
  

}

module.exports= post