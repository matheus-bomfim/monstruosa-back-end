import { Request, Response } from "express";
import updateUserService from "../../services/user/updateUser.service";

const updateUserController = async (req:Request,res:Response) => {
    const userId = req.params.id
    const userData = req.body

    const updateUser = await updateUserService(userId,userData)

    return res.status(202).json(updateUser)
}

export default updateUserController