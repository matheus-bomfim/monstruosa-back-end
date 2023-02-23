import * as express from "express";
import { IUserRequest } from "../../interfaces/user.interface";


declare global{
    namespace Express{
        interface Request{
            user:IUserRequest;
        }
    }
}