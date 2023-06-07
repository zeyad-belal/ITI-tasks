const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const {Schema} = mongoose;

const userSchema = new Schema({
  email:{
    type: String,
    required:true,
    unique:true
  },
  password:{
    type: String,
    required:true,
    select:false
  }
})

//hashing password in  mongoose middleware before saving user in db(document middleware)
userSchema.pre('save', async function(){
  const currentUser = this;
  if(currentUser.isModified('password')){
    const hashedPassword = await bcrypt.hash(currentUser.password,10)
    currentUser.password = hashedPassword
  }
})

const User = mongoose.model('User',userSchema);
module.exports =User;
