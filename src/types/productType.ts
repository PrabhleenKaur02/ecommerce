import { Document } from "mongoose";

interface ProductType extends Document{
    name: String,
    description: String,
    price: Number,
    category: String,
    inStock: Boolean,
    createdAt: Date,
    updatedAt: Date
}

export default ProductType