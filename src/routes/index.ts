import { Express } from "express";
import userRoute from "./userRoutes";
const appRoutes = (app:Express) => {
    app.use("/users",userRoute);
}
export default appRoutes