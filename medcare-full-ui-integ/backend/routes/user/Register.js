const { Mp } = require("@mui/icons-material")
const express=require("express")
const usermodel=require("../../models/user/Register.js")
const app=express()


app.post("/register", async(req,res)=>{
    const user = new usermodel(req.body)
 try{
     await user.save()
     .then(() =>res.json("details added"))
 } catch(error){
     res.status(500).send(error)
 }
 })

 app.get("/register", async (request, response) => {
    const users = await usermodel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

 module.exports=app