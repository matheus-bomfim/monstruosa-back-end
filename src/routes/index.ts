import { Express } from "express";
import publiRoute from "./publiRoutes";
import userRoute from "./userRoutes";
const appRoutes = (app:Express) => {
    app.use("/users",userRoute);
    app.use("/publis",publiRoute);
}
export default appRoutes