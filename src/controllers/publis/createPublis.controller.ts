import { Request, Response } from "express";
import createPublisService from "../../services/publis/createPublis.service";

const createPublisController = async (req:Request,res:Response) => {
    const publi = req.publis;
    const userId = req.user.id;
    const createPubli = await createPublisService(publi,userId);
    return res.status(201).json(createPubli);
}
export default createPublisController;