import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { AppError } from "../errors/appError";
import { userRepository } from "../utils/repositories/repositories";

const authenticationMiddleware = async (req:Request,res:Response,next:NextFunction) => {
    
    const token = req.headers.authorization;
    
    const decode = Object(jwt.decode(token!));

    console.log(decode)
    
    const findUser = await userRepository.findOneBy({
        id:decode.id
    });

    if(!findUser){
        throw new AppError(404,"Não Autorizado")
    };
    
    if(findUser.isAdm === true){
        req.user = {id:findUser.id}
        return next()
    };

    return res.status(404).json("Não Autorizado");
}

export default authenticationMiddleware;