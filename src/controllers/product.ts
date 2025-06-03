import { Request, Response } from "express"
import Product from '../models/product'
import ProductType from "../types/productType";

// GET /api/products
export const getProducts = async (req: Request, res: Response)=> {
     try {
    const products = await Product.find();
    res.json(products);  // send products as JSON response
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

// GET /api/products/:id
export const getProductById = async(req: Request, res: Response) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product) {
        res.status(404).json({message: "Product not found"})
        return
        }

        res.json(product)
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error
        })
    };
}

// POST /api/products
export const createProduct = async(req: Request, res: Response) => {
    try {
        const newProduct: ProductType = req.body;
        const product = new Product(newProduct)
        await product.save()
        res.status(201).json(product)
    } catch (error) {
        res.status(400).json({
            message: "Failed to create product. Try again later.",
            error
        })
    }
}

// PUT /api/products/:id
export const updateProduct = async(req:Request, res:Response) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        if(!updateProduct)
             res.status(404).json({
             message: "Product not found"
            })

        res.json(updateProduct)
    } catch (error) {
        res.status(400).json({
            message: "Failed to update product",
            error
        })
    }
}

// DELETE /api/products/:id
export const deleteProduct = async(req: Request, res: Response)=>{
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id)
        if(!deleted)
             res.status(404).json({
             message: "Product not found"
            })

        res.json({
            message: "Product successfully deleted"
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error
        })
    }
}

