import { Router } from "express";
import createPublisController from "../../controllers/publis/createPublis.controller";
import deletePublisController from "../../controllers/publis/deletePublis.controller";
import listPublisController from "../../controllers/publis/listPublis.controller";
import updatePublisController from "../../controllers/publis/updatePublis.controller";
import authenticationMiddleware from "../../middlewares/authentication.middleware";
import publiSchemaMiddleware from "../../middlewares/publiSchema.middleware";
import publiSchema from "../../schemas/publi.schema";

const publiRoute = Router();

publiRoute.get("",authenticationMiddleware,listPublisController)
publiRoute.post("",publiSchemaMiddleware(publiSchema),authenticationMiddleware,createPublisController);
publiRoute.patch("/:id",authenticationMiddleware,updatePublisController)
publiRoute.delete("/:id",authenticationMiddleware,deletePublisController)

export default publiRoute;