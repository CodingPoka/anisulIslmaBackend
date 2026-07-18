let users= require("../models/users.models.js");



const getAllUsers=(req,res)=>{
    res.status(200).json({
        user: users,
        message: "All users fetched successfully",
        success: true
    })
}


//create user
const createUsers=(req,res)=>{
    const {id, name,email}=req.body;
    const newUser={id, name,email};
    users.push(newUser);
    res.status(201).json({
        user: users
    })

}

//update user
const updateUser = (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;

    users
        .filter((user) => user.id == id)
        .map((selectedUser) => {
            selectedUser.name = name;
            selectedUser.email = email;
        });

    return res.status(200).json({
        user: users,
        message: "User updated successfully",
        success: true
    });
};

//delete user
const deleteUser =(req,res)=>{
    const id=req.params.id;
    const filterData= users.filter((user)=>user.id !=id);
    users=filterData;
    res.status(200).json({
        user: users,
        message: "User deleted successfully",
        success: true
    })

}

module.exports = { getAllUsers, createUsers, updateUser, deleteUser };