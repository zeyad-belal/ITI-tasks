const express = require('express')
const router = express.Router()
const Todo = require('../models/todos')



//get todo
router.get('/', async(req, res,next) => {
  const todos = await Todo.find()
  res.send(todos)
})

//get todo by id
router.get('/:id', async(req, res) => {
  const {id} = req.params;
  const todo = await Todo.findById(id)
  res.send(todo)
})

// add new todo
router.post('/', async(req, res) => {
    const {header,message} = req.body
    const newTodo = await Todo.create({header,message}) 
    res.send(newTodo)
})

// update todo  put or patch
router.patch('/:id', async(req, res) => {
  const {id} = req.params;
  const todo = await Todo.findByIdAndUpdate(id)
  res.send(todo)
}) 

// delete todo 
router.delete('/:id', async(req, res) => {
  const {id} = req.params;
  const todo = await Todo.findByIdAndDelete(id)
  res.send(todo)
})



module.exports = router