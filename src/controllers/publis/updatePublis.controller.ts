import { Request, Response } from "express";
import updatePublisService from "../../services/publis/updatePublis.service";

const updatePublisController = async (req:Request,res:Response) => {
    const publiId = req.params.id;
    const publiContent = req.body;
    const updatePubli = await updatePublisService(publiContent,publiId);
    return res.status(200).json(updatePubli);
}

export default updatePublisController