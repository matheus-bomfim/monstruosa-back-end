import { Request, Response } from "express";
import deletePublisService from "../../services/publis/deletePublis.service";

const deletePublisController = async (req:Request,res:Response) => {
    const publiId = req.params.id

    const deletePubli = deletePublisService(publiId)

    return res.status(204).json({})
}

export default deletePublisController