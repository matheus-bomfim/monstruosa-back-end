import * as express from "express";
import { IPublisRequest } from "../../interfaces/publis.interface";
import { ILogin, IUserAuth, IUserRequest } from "../../interfaces/user.interface";


declare global{
    namespace Express{
        interface Request{
            user:IUserAuth,
            newUser:IUserRequest,
            publis:IPublisRequest,
            login: ILogin
        }
    }
}