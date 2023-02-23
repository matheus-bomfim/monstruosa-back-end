import { Router } from "express";
import createUserController from "../../controllers/user/createUser.controller";
import deleteUserController from "../../controllers/user/deleteUser.controller";
import updateUserController from "../../controllers/user/updateUser.controller";
import userSchemaMiddleware from "../../middlewares/userSchema.middleware";
import userSchema from "../../schemas/user.schema";

const userRoute = Router();

userRoute.post("",userSchemaMiddleware(userSchema),createUserController);
userRoute.patch("/:id",updateUserController);
userRoute.delete("/:id",deleteUserController);

export default userRoute