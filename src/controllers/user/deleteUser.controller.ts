import { Request, Response } from "express";
import deleteUserService from "../../services/user/deleteUser.service";

const deleteUserController = async (req:Request,res:Response) => {
    const userId = req.params.id

    await deleteUserService(userId);

    return res.status(204).json({});
}

export default deleteUserController