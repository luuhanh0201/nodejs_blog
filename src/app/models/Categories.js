const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Category = new Schema({
    name: { type: String, default: "123456789" },
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now}
})

module.exports =  mongoose.model('Category', Category);