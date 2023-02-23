import { Request, Response } from "express";
import createUserService from "../../services/user/createUser.service";

const createUserController = async (req:Request,res:Response) => {
    const user = req.user;
    const createUser = await createUserService(user);
    return res.status(201).json(createUser);
};

export default createUserController;