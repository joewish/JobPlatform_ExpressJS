import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import UserController from "./src/controller/job.controller.js"
const userController = new UserController()

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
console.log(path.resolve("src","views"))
app.set("views", path.resolve("src", "views"));

//create routes here
app.get("/",userController.getLandingPage)
app.get("/jobs",userController.getjobsListPage)
app.get("/login",userController.getLoginPage)
app.get("/job/:id",userController.getJobDetailsPage)
app.post("/login",userController.authenticateUser)

export default app;
