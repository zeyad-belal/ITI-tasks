const express = require('express')
require('express-async-errors')
const path =  require('path')
const app = express()
const port = 3000
const morgan = require('morgan')
const toDoRoutes = require('./routes/toDoRoutes');
require('./db')

app.use(express.json())
app.use(express.urlencoded())
app.use(morgan('dev'))


app.use('/toDos',toDoRoutes)

//global error handling
app.use((err,req,res,next)=>{
  console.log(err)
  const statusCode = err.statusCode || 500;
  res.status(statusCode).send({
    status :statusCode,
    message : err?.message || 'internal server error',
    errors : err?.error || 'internal server error'
  });

  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

