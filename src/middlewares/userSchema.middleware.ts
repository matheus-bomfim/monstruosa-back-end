import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "yup";
import { AppError } from "../errors/appError";
import { IUserRequest } from "../interfaces/user.interface";

const userSchemaMiddleware = (schema: ObjectSchema<IUserRequest>) => {
    return async (req:Request,res:Response,next:NextFunction) => {
       try {
         const data = req.body
         const validatedData = await schema.validate(data,{
            abortEarly:false,
            stripUnknown:true
         })
         if(validatedData){return next()}
       } catch (error: any) {
            throw new AppError(400,error.errors?.join(", "))
       }
    }
}

export default userSchemaMiddleware