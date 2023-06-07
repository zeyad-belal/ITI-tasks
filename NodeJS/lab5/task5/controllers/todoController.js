const bcrypt = require('bcrypt')
const Todo = require('../models/todo')
const jwt = require('jsonwebtoken')
const AppError = require("../utils/AppError");


const getUserTodos =async(req,res)=>{
  const userId = req.user._id
  const todos = await Todo.find({user:userId}).populate('user')
  
    res.send(todos)
  }

// create todos
const createNewTodo = async(req,res)=>{
	const {title}= req.body
	const newTodo = await Todo.create({title,user:req.user._id})

	res.send(newTodo);
}

// update todos PATCH
const updateTodo = async(req,res)=>{
	const {id}= req.params;
  const {title} = req.body;
  const updatedTodo = await User.findByIdAndUpdate(id,{title},{ new: true })
  const result = updatedTodo ? 'todo updated' : 'something went wrong'

	res.send(result)
}

// delete todos 
const deleteTodo = async(req,res)=>{
	const {id}= req.params;
	const deletedTodo = await Todo.findByIdAndDelete(id)
  const result = deletedTodo ? 'todo deleted' : 'something went wrong'

	res.send(result)
}



module.exports = {getUserTodos,createNewTodo,updateTodo,deleteTodo}
