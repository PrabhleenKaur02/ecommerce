import { NextFunction, Request, RequestHandler, Response } from "express"
import zod, { ZodSchema } from "zod"

const validate = (schema: ZodSchema): RequestHandler => {
    // promise<void> is a async function and returns nothing when its done
    return async (req: Request, res: Response, next: NextFunction): Promise<void>=> {
        try{
        const result = schema.safeParse(req.body)

        if(!result.success){
             res.status(400).json({
                message: "Validation failed",
                error: result.error.flatten()
            })
        }

        req.body = result.data
        next()
    } catch(err){
        next(err)
    }
}
}

export default validate