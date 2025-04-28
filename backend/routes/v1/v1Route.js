import express from "express";
import staffRouter from "./staffRoute/staffRoutes.js";
import productRouter from "./productRoute/productRoutes.js";
import adminRouter from "./adminRoutes/adminRoute.js";

const v1Router = express.Router();

v1Router.use("/staff", staffRouter);
v1Router.use("/product", productRouter);
v1Router.use("/admin", adminRouter);
export default v1Router;
