const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Post = new Schema({
    title: {type:String,default:"Bài viết chưa có tiêu đề"},
    idUser: {type:Number},
    image: {type:String,default:""},
    preview: {type:String,default:""},
    content: {type:String,default:""},
    createAt: {type: Date, default:Date.now},
    updateAt: {type: Date, default:Date.now}

})
module.exports =  mongoose.model('Post', Post);
