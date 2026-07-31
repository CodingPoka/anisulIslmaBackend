

//this is prisma client and it will communicate with mongodb
const prisma=require("../config/prisma");


//get all users

const getAllUsers= async(req, res)=>{
    try{

        const users= await prisma.user.findMany();

      res.status(200).json({
      success: true,
      message: "Users fetched successfully.",
      data: users,
    });

    }catch(error){

        console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });

    }
}
