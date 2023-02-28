import { Router } from "express";
import createUserController from "../../controllers/user/createUser.controller";
import deleteUserController from "../../controllers/user/deleteUser.controller";
import loginController from "../../controllers/user/login.controller";
import updateUserController from "../../controllers/user/updateUser.controller";
import authenticationMiddleware from "../../middlewares/authentication.middleware";
import loginSchemaMiddleware from "../../middlewares/loginSchema.middleware";
import userSchemaMiddleware from "../../middlewares/userSchema.middleware";
import loginSchema from "../../schemas/login.schema";
import userSchema from "../../schemas/user.schema";

const userRoute = Router();

userRoute.post("",userSchemaMiddleware(userSchema),createUserController);
userRoute.post("/login",loginSchemaMiddleware(loginSchema),loginController);
userRoute.patch("/:id",authenticationMiddleware,updateUserController);
userRoute.delete("/:id",authenticationMiddleware,deleteUserController);

export default userRoute