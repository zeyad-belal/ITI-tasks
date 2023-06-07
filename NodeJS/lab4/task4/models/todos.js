const mongoose = require('mongoose')
const {Schema} = mongoose;

const toDoSchema = new Schema({
  header:{
    type: String,
    required:true,
    unique:true
  },
  message:{
    type: String,
    required:true
  }
})

const toDo = mongoose.model('toDO',toDoSchema);
module.exports =toDo;
