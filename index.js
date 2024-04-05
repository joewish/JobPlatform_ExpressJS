import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import UserController from "./src/controller/user.controller.js"
const userController = new UserController()

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
console.log(path.resolve("src","views"))
app.set("views", path.resolve("src", "views"));

//create routes here
app.get("/",userController.getLoginPage)
export default app;
