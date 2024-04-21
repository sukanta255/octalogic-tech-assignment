const express = require('express');
const { getAllUsers, createUser } = require('../controllers/user.controllers');

const userRouter = express.Router();

userRouter.get("/", getAllUsers)

userRouter.post("/create",createUser)

module.exports = {
    userRouter
}