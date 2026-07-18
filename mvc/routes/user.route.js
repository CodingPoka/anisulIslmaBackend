

const express=require("express");
const { getAllUsers, createUsers, updateUser, deleteUser } = require("../controllers/user.controller");
const router=express.Router();



router.get("/users", getAllUsers);
router.post("/users", createUsers);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports=router;