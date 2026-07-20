

const User = require("../models/user.model");


const adminDashboard = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome Admin!",
  });
};




const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({role: "user"}).select("-password");

    return res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


module.exports = {
  adminDashboard,
   getAllUsers,
};