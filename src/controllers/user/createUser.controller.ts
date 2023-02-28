import { Request, Response } from "express";
import createUserService from "../../services/user/createUser.service";
import { instanceToPlain } from "class-transformer";
const createUserController = async (req:Request,res:Response) => {
    const user = req.newUser;
    const createUser = await createUserService(user);
    return res.status(201).json(instanceToPlain(createUser));
};

export default createUserController;