import { z } from "zod"

const productSchema = z.object({
    name: z.string().min(3, "Product name must be atleast 3 characters"),
    description: z.string(),
    price: z.number().positive("Price must be a positive number"),
    category: z.string(),
    inStock: z.boolean()
})

export type ProductInput = z.infer<typeof productSchema>
export default productSchema