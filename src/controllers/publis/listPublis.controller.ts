import { Request, Response } from "express";
import listPublisService from "../../services/publis/listPublis.service";

const listPublisController = async (req:Request,res:Response) => {
    const list = await listPublisService()
    return res.status(200).json({list})
}
export default listPublisController