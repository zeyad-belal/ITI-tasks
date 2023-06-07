const express = require("express");
const router = express.Router();
const {signUp,getUserById,getAllUsers,updateUser,deleteUser,login}=require("../controllers/userController");
const {loginValidation,signupValidation} = require ('../utils/authenticationSchema')

//get all users
router.get("/", getAllUsers);

//get user by id
router.get("/:id", getUserById);

// registration
router.post("/signup",signupValidation, signUp);

//login
router.post("/login",loginValidation, login);

// update user  put or patch
router.patch("/:id", updateUser);

// delete user
router.delete("/:id", deleteUser);

module.exports = router;
