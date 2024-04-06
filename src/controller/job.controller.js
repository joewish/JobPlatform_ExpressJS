import {jobs,getJob,getUser} from "../model/job.model.js"
export default class UserController{
  getLandingPage(req,res){
    res.render("landingPage",{user:false})
  }
  getLoginPage(req,res){
    if(getUser(req.body)){
      res.render("landingPage",{user:true,userName:req.body.name})
    }else{
      //TO-DO
      res.render("loginPage")
    }
  }
  getjobsListPage(req,res){
    res.render("jobsPage",{jobs:jobs})
  }
  loginUser = (req, res) => {
    // Write your code her
    const userCheck = req.body
    if(getUser(userCheck)){
      return res.send({ success: "true", message: "login successful" })
    }else{
      return res.send({ success: "false", message: "login failed" })
    }
  };

  authenticateUser(req, res){
    if(getUser(req.body)){
      res.render('landingPage')
    }else{
      res.render('loginPage')
    }
  }
  getJobDetailsPage(req, res){
    const id = req.params
    res.render("jobDescription",{job:getJob(id.id)[0],auth:true})
  }
  // getPostJob(req, res){
  //   res
  // }
}