const post={}

post.create=(req,res)=>{

    res.send('create post')

}

post.like=(req,res)=>{

    res.send('like')

}

post.edit=(req,res)=>{

    res.send('edit post')

}

module.exports= post