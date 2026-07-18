
//require Product model

const Product=require("../models/product.model");

//create new product
const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);

        return res.status(201).json({
            success: true,
            message: "Product created successfully.",
            data: product,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//get all product
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({ isActive: true });

        return res.status(200).json({
            success: true,
            message: "Products fetched successfully.",
            count: products.length,
            data: products,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//get product by id 
const getProductById = async (req, res) => {
    try {
        const { productId } = req.params;

        const product = await Product.findOne({
            productId,
            isActive: true,
        });

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Product fetched successfully.",
            data: product,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//update product by id
const updateProduct = async (req, res) => {
    try {
        const { productId } = req.params;

        const {
            name,
            description,
            price,
            rating,
            stockQuantity,
            isActive,
        } = req.body;

        const updatedProduct = await Product.findOneAndUpdate(
            {
                productId,
                isActive: true,
            },
            {
                name,
                description,
                price,
                rating,
                stockQuantity,
                isActive,
            },
            {
                new: true,
                runValidators: true,
            }
        );

        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Product updated successfully.",
            data: updatedProduct,
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

//delete product by id
const deleteProduct = async (req, res) => {
    try {
        const { productId } = req.params;

        const deletedProduct = await Product.findOneAndUpdate(
            {
                productId,
                isActive: true,
            },
            {
                isActive: false,
            },
            {
                new: true,
            }
        );

        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Product deleted successfully.",
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
};