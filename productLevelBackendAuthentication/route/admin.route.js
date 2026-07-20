const express = require("express");
const router = express.Router();

const authenticateUser = require("../middleware/auth.middleware");
const authorizeRoles = require("../middleware/role.middleware");

const {
  adminDashboard, getAllUsers
} = require("../controllers/admin.controller");

router.get(
  "/dashboard",
  authenticateUser,
  authorizeRoles("admin"),
  adminDashboard
);



router.get(
  "/users",
  authenticateUser,
  authorizeRoles("admin"),
  getAllUsers
);

module.exports = router;