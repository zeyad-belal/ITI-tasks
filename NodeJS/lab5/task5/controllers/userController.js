const bcrypt = require('bcrypt')
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const AppError = require("../utils/AppError");



const signUp =async(req, res, next) => {
  const {email,password} = req.body
  if(!email || !password) return next(new AppError('email and password required',401))
  
  const newUser = await User.create({email,password}) 
  newUser.password =undefined
  res.send(newUser)
}

const login = async (req, res,next) => {
  const {email,password} = req.body;
  if(!email || !password) return next(new AppError('email and password are requird',401))
  const user = await User.findOne({email}).select('+password');

  if(!user) return next("user not found");

  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch) return next({error:"invalid credentials", statusCode:404});
  
  const token =   jwt.sign({id:user._id},process.env.JWT_SECRET)
  
  user.password = undefined;
  res.send({user,token}); 
}

const getAllUsers =async(req, res) => {
  const user = await User.find()
  res.send(user)
}

const getUserById = async(req, res) => {
  const {id} = req.params;
  const user = await User.findById(id)
  if(!user) return next(new AppError('user not found',404))
  res.send(user)
}

const updateUser = async(req, res) => {
  const {id} = req.params;
  const {email,password} = req.body;
  const user = await User.findByIdAndUpdate(id,{email,password},{ new: true })
  res.send(user)
}

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  res.send(user);
}



module.exports = {signUp,getUserById,getAllUsers , updateUser,deleteUser,login}