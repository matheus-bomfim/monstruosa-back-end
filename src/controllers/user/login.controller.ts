import { Request, Response } from "express";
import loginService from "../../services/user/login.service";

const loginController = async (req:Request,res:Response) => {
    const loginData = req.login

    const login = await loginService(loginData)

    return res.status(200).json({token:login})
}

export default loginController