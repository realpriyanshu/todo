const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(`${process.env.MONGO_URL}`)
const TodoSchema = require('./db/db.js');
const createTodoZ = require('./types')
const cors = require('cors')
app.use(express.json());



app.use(cors({ origin: "*" })); 

app.post('/create' , async(req,res)=>{
     
    const payload = req.body;
   const valid = createTodoZ.safeParse(payload);

   if(!valid.success){
    res.status(400).json(valid.error);
   }

   const newTodo = await TodoSchema.create({
    title:payload.title,
    description:payload.description
   })

     res.json({
        msg:"todo craeted"
     })
})

app.get('/todos', async(req,res)=>{
    const todo_list = await TodoSchema.find({});
    res.json(todo_list);
})

app.listen(process.env.PORT || 3000 ,()=>{
    console.log(`your server is running on port ${process.env.PORT}`)
})