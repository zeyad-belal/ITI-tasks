const express = require('express');
const verfiyToken = require('../utils/verfiyToken');
const Todo = require('../models/todo');
const { getUserTodos, createNewTodo , updateTodo , deleteTodo}=require("../controllers/todoController");

const router = express.Router();

//todos

router.get('/',verfiyToken,getUserTodos)

// // get todo by id
// router.get('/:id',(req,res)=>{
// 	const {id}= req.params;
// 	// get user with id 
// 	res.send('todos')
// })

// create todos
router.post('/new',verfiyToken,createNewTodo)

// update todos
// put : replace the old document with the new document
// patch: only modifies certain properties inside the document
router.patch('/:id',updateTodo)

// delete todos
router.delete('/:id',deleteTodo)

module.exports = router;