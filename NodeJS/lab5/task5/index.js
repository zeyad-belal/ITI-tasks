require('dotenv').config()
require('./db')
require('express-async-errors')
const express = require('express')
const morgan = require('morgan')
const usersRoutes = require('./routes/usersRoutes');
const todosRoutes = require('./routes/todosRoutes');
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded())
app.use(morgan('dev'))
app.use(cors())
//cross origin rescource sharing .. node block req from front by default 
//browser send preflight req then the req itself


app.use('/users',usersRoutes)
app.use('/todos',todosRoutes)

//global error handler
app.use((err,req,res,next)=>{
	const statusCode = err.statusCode || 500;

	res.status(statusCode).send({
		status:statusCode,
		message: err?.message || 'internal server error',
		errors: err?.errors || []
	})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

