

const express=require("express");
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");
const validate= require("../middleware/validate.middleware");
const createProductSchema = require("../validator/product.validator");


const router=express.Router();




//get all product
router.get("/",getAllProducts);

//get single product by id
router.get("/:productId",getProductById);

//create product
router.post("/", validate(createProductSchema),createProduct);

//update product by id
router.put("/:productId", updateProduct);

//delete product by id
router.delete("/:productId",deleteProduct);



module.exports=router;