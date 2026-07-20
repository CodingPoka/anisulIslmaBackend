const express=require("express");
const validate= require("../middleware/validate.middleware");
const {authSchema, loginSchema} = require("../validations/auth.validation");
const { registerUser, loginUser, getProfile } = require("../controllers/auth.controller");
const authenticateUser=require("../middleware/auth.middleware");
const authorizeRoles = require("../middleware/role.middleware");
const router=express.Router();




router.post("/register", validate(authSchema),registerUser);
router.post("/login", validate(loginSchema), loginUser);
router.get("/profile", authenticateUser, getProfile);


//admin
router.get("/admin", authenticateUser, authorizeRoles("admin"))

module.exports=router;