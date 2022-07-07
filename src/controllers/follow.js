const follow={}
const follower= require('../database')

follow.createfollower=(req,res)=>{
    try{
        follower.createfollower(req,res)
    }catch(e){
        console.log(e)
    }
}

module.exports = follow;