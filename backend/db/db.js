
const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title :String,
    description:String
})


const TodoSchema = mongoose.model('TodoS',todoSchema);

module.exports  = TodoSchema;