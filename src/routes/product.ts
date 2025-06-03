import express from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/product";
import validate from "../middleware/validate";
import productSchema from "../validators/productValidator";


const router = express.Router()

router.get('/', validate(productSchema) , getProducts)
router.get('/:id', validate(productSchema) , getProductById)
router.post('/', validate(productSchema), createProduct)
router.put('/:id', validate(productSchema), updateProduct)
router.delete('/:id', validate(productSchema), deleteProduct)

export default router 